<div align="center">

# 🧠 Smart Order Processing

**KI-gestützte Auftragsverarbeitung — Freitext oder PDF-Upload → strukturierter Auftrag**

[![CI](https://github.com/intelligent-process-lab/smart-order-processing/actions/workflows/ci.yml/badge.svg)](https://github.com/intelligent-process-lab/smart-order-processing/actions/workflows/ci.yml)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker&logoColor=white)](https://docs.docker.com/compose)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Contributing](https://img.shields.io/badge/Contributing-Welcome-brightgreen)](CONTRIBUTING.md)

</div>

Unternehmen erhalten Bestellungen als Freitext oder PDF. **Smart Order Processing** extrahiert automatisch strukturierte Auftragsdaten daraus — Kunde, Artikel, Mengen, Preis, Datum — und leitet unklare Fälle in eine manuelle Prüfung.

## 🌐 Architektur

```
Browser (React/TS) → FastAPI Backend → Claude LLM-Extraktion → Validierung → Strukturierter Auftrag
```

```
smart-order-processing/
├── src/
│   ├── backend/          # FastAPI + Pydantic + Claude API
│   │   ├── main.py       # REST-Endpoints
│   │   ├── extraktor.py  # LLM-Extraktion + Validierung
│   │   └── models.py     # Pydantic-Modelle
│   └── frontend/         # React + TypeScript + Vite + Tailwind
├── tests/
│   ├── test_api.py        # 8 API-Integrationstests
│   └── test_validierung.py # 6 Unit-Tests
├── docker-compose.yml
└── .github/workflows/ci.yml
```

## ✨ Features

- **LLM-Extraktion** — Claude extrahiert Kunde, Artikel, Menge, Preis und Datum aus Freitext
- **Datei-Upload** — UTF-8-Textdateien und PDFs verarbeitbar
- **Validierung** — definierte Regeln prüfen Vollständigkeit, Fehler werden separat ausgewiesen
- **Auftragsverlauf** — alle verarbeiteten Aufträge mit Status abrufbar
- **14 automatisierte Tests** — Unit + Integration, kein echter LLM-Aufruf nötig
- **CI/CD** — GitHub Actions prüft Backend-Tests + Frontend-Build bei jedem Push

## 🔌 API-Endpoints

| Methode | Route | Beschreibung |
|---|---|---|
| `GET` | `/health` | Systemstatus |
| `POST` | `/auftrag/text` | Auftrag aus Freitext verarbeiten |
| `POST` | `/auftrag/datei` | Auftrag aus Datei-Upload verarbeiten |
| `GET` | `/auftraege` | Alle verarbeiteten Aufträge abrufen |
| `DELETE` | `/auftraege` | Verlauf leeren |

**Beispiel:**
```bash
curl -X POST http://localhost:8000/auftrag/text \
  -H "Content-Type: application/json" \
  -d '{"text": "Bestellung von Mustermann GmbH: 5x Schreibtisch, 10x Stuhl. Liefertermin 01.12.2026."}'
```

```json
{
  "dateiname": "text-eingabe",
  "status": "erfolgreich",
  "auftrag": {
    "kunde": "Mustermann GmbH",
    "artikel": ["Schreibtisch", "Stuhl"],
    "menge": ["5x", "10x"],
    "datum": "2026-12-01"
  },
  "validierung": { "gueltig": true, "fehler": [], "warnungen": [] }
}
```

## 🧪 Tests

```bash
pytest tests/ -v
```

```
tests/test_api.py::test_health                                      PASSED
tests/test_api.py::test_auftrag_text_leer_gibt_400                  PASSED
tests/test_api.py::test_auftrag_text_ohne_body_gibt_422             PASSED
tests/test_api.py::test_auftrag_text_erfolgreich                    PASSED
tests/test_api.py::test_auftraege_liste_initial_leer                PASSED
tests/test_api.py::test_verlauf_wird_befuellt                       PASSED
tests/test_api.py::test_verlauf_loeschen                            PASSED
tests/test_api.py::test_auftrag_fehler_wird_als_fehler_gespeichert  PASSED
tests/test_validierung.py::test_vollstaendiger_auftrag_ist_gueltig  PASSED
tests/test_validierung.py::test_fehlender_kunde_ist_ungueltig       PASSED
tests/test_validierung.py::test_fehlende_artikel_ist_ungueltig      PASSED
tests/test_validierung.py::test_fehlender_preis_ist_warnung         PASSED
tests/test_validierung.py::test_fehlendes_datum_ist_warnung         PASSED
tests/test_validierung.py::test_leere_eingabe_hat_mehrere_fehler    PASSED

14 passed in 1.36s
```

## 🚀 Quickstart

**Docker (empfohlen):**
```bash
git clone https://github.com/intelligent-process-lab/smart-order-processing.git
cd smart-order-processing
cp .env.example .env          # GOOGLE_API_KEY eintragen
docker compose up --build
```
→ Frontend: http://localhost:5173  
→ API Docs: http://localhost:8000/docs

**Lokal:**
```bash
# Backend
cd src/backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend (zweites Terminal)
cd src/frontend
npm install && npm run dev
```

## 🛠 Tech Stack

| Bereich | Technologie |
|---|---|
| Backend | Python 3.11 · FastAPI · Pydantic v2 · Uvicorn |
| KI-Extraktion | Anthropic Claude API |
| Frontend | React 18 · TypeScript · Vite · Tailwind CSS |
| Testing | pytest · httpx · gemockte LLM-Calls |
| DevOps | Docker Compose · GitHub Actions CI |

## 👥 Team

**Enes Doudouzi** — AI & Software Engineering  
**Ahmet** — Process Optimization & Business Analysis

*Intelligent Process Optimization Lab*
