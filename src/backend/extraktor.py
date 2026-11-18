"""KI-Agent zur Extraktion von Auftragsdaten aus Text – powered by Claude."""

import json
import anthropic

MODEL = "claude-sonnet-4-6"

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
    client = anthropic.Anthropic()
    antwort = client.messages.create(
        model=MODEL,
        max_tokens=1024,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": f"Extrahiere Auftragsdaten:\n\n{text}"}],
    )
    rohtext = antwort.content[0].text.strip()
    if rohtext.startswith("```"):
        rohtext = rohtext.split("```")[1]
        if rohtext.startswith("json"):
            rohtext = rohtext[4:]
    return json.loads(rohtext)


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
