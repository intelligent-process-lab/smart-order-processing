"""KI-Agent zur Extraktion von Auftragsdaten aus Text – powered by Google Gemini."""

import json
import os

from google import genai
from google.genai import types

MODEL = "models/gemini-3.5-flash"

SYSTEM_PROMPT = """Du bist ein spezialisierter Daten-Extraktions-Agent für Bestellungen und Aufträge.

Analysiere den gegebenen Text und extrahiere strukturierte Auftragsdaten.
Antworte IMMER mit einem validen JSON-Objekt mit diesen Feldern:

{
  "kunde": "Name des Kunden oder null",
  "artikel": ["Artikel 1", "Artikel 2"],
  "menge": ["2x", "5x"],
  "gesamtpreis": "1234.56 EUR oder null",
  "datum": "YYYY-MM-DD oder null",
  "bemerkungen": "Sonstige relevante Infos oder null"
}

Wenn ein Feld nicht im Text vorkommt, setze null. Antworte NUR mit dem JSON."""


def extrahiere_auftrag(text: str) -> dict:
    client = genai.Client(api_key=os.environ["GOOGLE_API_KEY"])
    antwort = client.models.generate_content(
        model=MODEL,
        contents=f"Extrahiere Auftragsdaten:\n\n{text}",
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT,
            temperature=0.1,
        ),
    )
    rohtext = antwort.text.strip()
    if rohtext.startswith("```"):
        rohtext = rohtext.split("```")[1]
        if rohtext.startswith("json"):
            rohtext = rohtext[4:]
    return json.loads(rohtext)


def extrahiere_aus_pdf(inhalt: bytes) -> str:
    """Extrahiert Text aus einem PDF-Byte-String."""
    try:
        import io
        import PyPDF2
        reader = PyPDF2.PdfReader(io.BytesIO(inhalt))
        seiten = [seite.extract_text() or "" for seite in reader.pages]
        return "\n".join(seiten).strip()
    except Exception as e:
        raise ValueError(f"PDF konnte nicht gelesen werden: {e}")


def validiere_auftrag(daten: dict) -> dict:
    fehler = []
    warnungen = []

    if not daten.get("kunde"):
        fehler.append("Kein Kunde gefunden")
    if not daten.get("artikel"):
        fehler.append("Keine Artikel gefunden")
    if not daten.get("gesamtpreis"):
        warnungen.append("Kein Gesamtpreis angegeben")
    if not daten.get("datum"):
        warnungen.append("Kein Datum angegeben")

    return {
        "gueltig": len(fehler) == 0,
        "fehler": fehler,
        "warnungen": warnungen,
    }
