"""API-Tests – extrahiere_auftrag wird gemockt, kein echter LLM-Aufruf."""
import sys
import os
from unittest.mock import patch

import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../src/backend"))

from main import app

client = TestClient(app)

MOCK_AUFTRAG = {
    "kunde": "Test GmbH",
    "artikel": ["Schreibtisch", "Stuhl"],
    "menge": ["1x", "4x"],
    "gesamtpreis": "890.00 EUR",
    "datum": "2026-11-21",
    "bemerkungen": None,
}


def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_auftrag_text_leer_gibt_400():
    response = client.post("/auftrag/text", json={"text": ""})
    assert response.status_code == 400


def test_auftrag_text_ohne_body_gibt_422():
    response = client.post("/auftrag/text", json={})
    assert response.status_code == 400


def test_auftrag_text_erfolgreich():
    with patch("main.extrahiere_auftrag", return_value=MOCK_AUFTRAG):
        response = client.post("/auftrag/text", json={"text": "Bestellung von Test GmbH: 1x Schreibtisch"})
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "erfolgreich"
    assert data["auftrag"]["kunde"] == "Test GmbH"


def test_auftraege_liste_initial_leer():
    # Verlauf leeren vor dem Test
    client.delete("/auftraege")
    response = client.get("/auftraege")
    assert response.status_code == 200
    assert response.json()["auftraege_gesamt"] == 0


def test_verlauf_wird_befuellt():
    client.delete("/auftraege")
    with patch("main.extrahiere_auftrag", return_value=MOCK_AUFTRAG):
        client.post("/auftrag/text", json={"text": "Bestellung Test GmbH"})
    response = client.get("/auftraege")
    assert response.json()["auftraege_gesamt"] == 1
    assert response.json()["erfolgreich"] == 1


def test_verlauf_loeschen():
    with patch("main.extrahiere_auftrag", return_value=MOCK_AUFTRAG):
        client.post("/auftrag/text", json={"text": "Test"})
    client.delete("/auftraege")
    response = client.get("/auftraege")
    assert response.json()["auftraege_gesamt"] == 0


def test_auftrag_fehler_wird_als_fehler_gespeichert():
    with patch("main.extrahiere_auftrag", side_effect=Exception("LLM nicht erreichbar")):
        response = client.post("/auftrag/text", json={"text": "irgendein Text"})
    assert response.status_code == 200
    assert response.json()["status"] == "fehler"
    assert "LLM nicht erreichbar" in response.json()["fehler"]
