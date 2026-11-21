"""Unit-Tests für validiere_auftrag – kein Netzwerk, kein Mock nötig."""
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../src/backend"))

from extraktor import validiere_auftrag


def test_vollstaendiger_auftrag_ist_gueltig():
    daten = {
        "kunde": "Max Mustermann",
        "artikel": ["Laptop", "Maus"],
        "menge": ["1x", "2x"],
        "gesamtpreis": "1299.00 EUR",
        "datum": "2026-11-21",
    }
    ergebnis = validiere_auftrag(daten)
    assert ergebnis["gueltig"] is True
    assert ergebnis["fehler"] == []


def test_fehlender_kunde_ist_ungueltig():
    daten = {"artikel": ["Laptop"], "menge": ["1x"]}
    ergebnis = validiere_auftrag(daten)
    assert ergebnis["gueltig"] is False
    assert any("Kunde" in f for f in ergebnis["fehler"])


def test_fehlende_artikel_ist_ungueltig():
    daten = {"kunde": "Maria Muster", "artikel": []}
    ergebnis = validiere_auftrag(daten)
    assert ergebnis["gueltig"] is False
    assert any("Artikel" in f for f in ergebnis["fehler"])


def test_fehlender_preis_ist_warnung():
    daten = {"kunde": "Test GmbH", "artikel": ["Stuhl"]}
    ergebnis = validiere_auftrag(daten)
    assert ergebnis["gueltig"] is True
    assert any("preis" in w.lower() for w in ergebnis["warnungen"])


def test_fehlendes_datum_ist_warnung():
    daten = {"kunde": "Test GmbH", "artikel": ["Tisch"], "datum": None}
    ergebnis = validiere_auftrag(daten)
    assert ergebnis["gueltig"] is True
    assert any("Datum" in w for w in ergebnis["warnungen"])


def test_leere_eingabe_hat_mehrere_fehler():
    ergebnis = validiere_auftrag({})
    assert ergebnis["gueltig"] is False
    assert len(ergebnis["fehler"]) >= 2
