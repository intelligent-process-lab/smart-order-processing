<div align="center">

# 🧠 Smart Order Processing

**KI-gestützte Prozessoptimierung für intelligente Auftragsverarbeitung**

[![Status](https://img.shields.io/badge/Status-MVP%20Live-22C55E?style=for-the-badge)](https://github.com/intelligent-process-lab/smart-order-processing)
[![Backend](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi)](https://github.com/intelligent-process-lab/smart-order-processing)
[![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript-3178C6?style=for-the-badge&logo=react)](https://github.com/intelligent-process-lab/smart-order-processing)
[![KI](https://img.shields.io/badge/KI-Claude%20Sonnet-D97706?style=for-the-badge)](https://github.com/intelligent-process-lab/smart-order-processing)
[![Lizenz](https://img.shields.io/badge/Lizenz-Open%20Source-0EA5E9?style=for-the-badge)](https://github.com/intelligent-process-lab/smart-order-processing)

<br/>

> Ein Open-Source-Prototyp zur KI-gestützten Auftragsverarbeitung –  
> entwickelt als professionelles Portfolio-Projekt mit synthetischen Fallstudien-Daten.

</div>

---

## Was macht dieses System?

Ein Nutzer gibt einen unstrukturierten Auftragstext ein — der KI-Agent analysiert ihn automatisch, extrahiert alle relevanten Daten und validiert den Auftrag in Echtzeit.

```
Eingabe (Freitext):
  "Kunde: Mustermann GmbH, 3x Laptop Dell XPS, 5x Maus Logitech,
   Gesamtpreis: 4.750 EUR, Lieferung bis Ende November"

                        │
                        ▼
              🤖 Claude KI-Agent

                        │
                        ▼

Ausgabe (strukturiert):
  ✅ Kunde:       Mustermann GmbH
  ✅ Artikel:     Laptop Dell XPS, Maus Logitech
  ✅ Menge:       3x, 5x
  ✅ Preis:       4.750 EUR
  ⚠️  Datum:      nicht angegeben
```

---

## Systemarchitektur

```
┌──────────────────────────────────────────────────────────────────┐
│                        SMART ORDER PROCESSING                     │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│   ┌─────────────┐    ┌──────────────────┐    ┌────────────────┐  │
│   │   Eingang   │    │   KI-Verarbeitung │    │    Ausgang     │  │
│   │             │    │                   │    │                │  │
│   │ Freitext    │───▶│  Claude Sonnet    │───▶│ Strukturierter │  │
│   │ Datei-Upload│    │  Extraktion       │    │ Auftrag        │  │
│   │             │    │  Validierung      │    │ + Bericht      │  │
│   └─────────────┘    └──────────────────┘    └────────────────┘  │
│                               │                                    │
│                    ┌──────────┴──────────┐                        │
│                    │                     │                         │
│          ┌─────────▼──────┐    ┌────────▼──────┐                 │
│          │    Backend      │    │   Dashboard   │                  │
│          │  FastAPI :8000  │◀──▶│  React :5173  │                 │
│          │  REST API       │    │  Tailwind CSS │                  │
│          └────────────────┘    └───────────────┘                  │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

---

## Features

| Feature | Technologie | Status |
|---|---|---|
| 🤖 KI-Extraktion | Claude Sonnet (Anthropic) | ✅ Live |
| ✅ Datenvalidierung | Regelbasierte Prüfung | ✅ Live |
| 🔌 REST API | FastAPI + Pydantic | ✅ Live |
| 🖥️ Dashboard | React + TypeScript + Tailwind | ✅ Live |
| 📄 Datei-Upload | FastAPI UploadFile | ✅ Live |
| 🐳 Docker | docker-compose | ✅ Bereit |
| 📊 BPMN-Analyse | Prozessmodelle | ⏳ Geplant |
| 🗄️ Datenbank | PostgreSQL Persistenz | ⏳ Geplant |

---

## Tech Stack

| Bereich | Technologie |
|---|---|
| **Backend** | Python 3.11 · FastAPI · Pydantic · Uvicorn |
| **KI / LLM** | Anthropic Claude (claude-sonnet-4-6) |
| **Frontend** | React 19 · TypeScript · Vite · Tailwind CSS v4 |
| **DevOps** | Docker · docker-compose · GitHub Actions |

---

## Quickstart

### Option A — Docker (empfohlen)

```bash
git clone https://github.com/intelligent-process-lab/smart-order-processing.git
cd smart-order-processing
cp .env.example .env
# ANTHROPIC_API_KEY in .env eintragen
docker-compose up --build
```

### Option B — Lokal

```bash
# Backend
cd src/backend
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
export ANTHROPIC_API_KEY=sk-ant-...
uvicorn main:app --reload --port 8000

# Frontend (neues Terminal)
cd src/frontend
npm install && npm run dev
```

**Öffne dann:**
- 🖥️ **Dashboard:** http://localhost:5173
- 📡 **API-Docs:** http://localhost:8000/docs

---

## API Endpoints

| Method | Endpoint | Beschreibung |
|---|---|---|
| `GET` | `/health` | System-Status |
| `POST` | `/auftrag/text` | Auftrag aus Freitext verarbeiten |
| `POST` | `/auftrag/datei` | Auftrag aus Datei-Upload verarbeiten |
| `GET` | `/auftraege` | Alle verarbeiteten Aufträge abrufen |
| `DELETE` | `/auftraege` | Verlauf leeren |

---

## Projektstruktur

```
smart-order-processing/
│
├── src/
│   ├── backend/
│   │   ├── main.py          ← FastAPI App + Endpoints
│   │   ├── extraktor.py     ← Claude KI-Agent
│   │   ├── models.py        ← Pydantic Schemas
│   │   ├── requirements.txt
│   │   └── Dockerfile
│   │
│   └── frontend/
│       ├── src/
│       │   ├── App.tsx
│       │   ├── types.ts
│       │   └── components/
│       │       ├── StatsBar.tsx      ← Live-Statistiken
│       │       ├── AuftragForm.tsx   ← Eingabe + Beispiel
│       │       └── ErgebnisKarte.tsx ← Ergebnis-Anzeige
│       └── Dockerfile
│
├── data/              ← Synthetische Testdaten
├── docs/              ← BPMN, Wirtschaftlichkeitsanalyse
├── docker-compose.yml
├── .env.example
└── PROJECT_STATUS.md
```

---

## Roadmap

| Phase | Zeitraum | Status |
|---|---|---|
| 🔧 Repo & Grundstruktur | Woche 1–2 | ✅ Abgeschlossen |
| 🏗️ Backend & Frontend MVP | Woche 3–4 | ✅ Abgeschlossen |
| 🤖 KI-Pipeline verfeinern | Woche 5–6 | ⏳ Laufend |
| 🗄️ Datenbank & Persistenz | Woche 7–8 | ⬜ Ausstehend |
| 📋 BPMN & Fallstudie | Woche 9–10 | ⬜ Ausstehend |

---

## Team

| Person | Rolle | Schwerpunkt |
|---|---|---|
| **Person A** | Wirtschaftsingenieur | Prozessoptimierung · BPMN · Wirtschaftlichkeit |
| **Enes** | KI-Softwareentwickler | Backend · KI-Integration · Frontend · DevOps |

> Nur gemeinsam freigegebene Entscheidungen gelten als verbindlicher Projektstand.  
> Simulierte Ergebnisse werden niemals als reale Unternehmensergebnisse dargestellt.

---

<div align="center">

**Intelligent Process Lab** · Open Source · Portfolio-Projekt 2026

</div>
