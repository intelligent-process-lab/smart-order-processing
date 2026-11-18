<div align="center">

# 🧠 Smart Order Processing

**KI-gestützte Prozessoptimierung für intelligente Auftragsverarbeitung**

[![Status](https://img.shields.io/badge/Status-In%20Entwicklung-F59E0B?style=for-the-badge)](https://github.com/intelligent-process-lab/smart-order-processing)
[![Phase](https://img.shields.io/badge/Phase-Vorbereitung-6366F1?style=for-the-badge)](https://github.com/intelligent-process-lab/smart-order-processing)
[![Laufzeit](https://img.shields.io/badge/Laufzeit-10%20Wochen-22C55E?style=for-the-badge)](https://github.com/intelligent-process-lab/smart-order-processing)
[![Lizenz](https://img.shields.io/badge/Lizenz-Open%20Source-0EA5E9?style=for-the-badge)](https://github.com/intelligent-process-lab/smart-order-processing)

<br/>

> Ein Open-Source-Prototyp zur KI-gestützten Prozessoptimierung –  
> entwickelt als professionelles Portfolio-Projekt mit synthetischen Fallstudien-Daten.

</div>

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
│   │ Dokumente   │───▶│  Extraktion       │───▶│ Validierter    │  │
│   │ Bestellungen│    │  Klassifikation   │    │ Auftrag        │  │
│   │ PDFs / CSV  │    │  Entscheidung     │    │ Bericht        │  │
│   └─────────────┘    └──────────────────┘    └────────────────┘  │
│                               │                                    │
│                    ┌──────────┴──────────┐                        │
│                    │                     │                         │
│             ┌──────▼──────┐    ┌────────▼──────┐                 │
│             │  Backend    │    │   Dashboard   │                  │
│             │  FastAPI    │    │   React / TS  │                  │
│             │  REST API   │    │   Tailwind    │                  │
│             └─────────────┘    └───────────────┘                  │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

---

## Features

| Feature | Beschreibung | Status |
|---|---|---|
| 📄 Dokumentenverarbeitung | Text/CSV-Import, automatisches Parsing | ✅ Implementiert |
| 🤖 KI-Extraktion | Auftragsdaten per Claude extrahieren | ✅ Implementiert |
| ✅ Datenvalidierung | Regelbasierte Plausibilitätsprüfung | ✅ Implementiert |
| 🔌 REST API | FastAPI Backend mit Swagger-Doku | ✅ Implementiert |
| 🖥️ Dashboard | React Frontend mit Live-Statistiken | ✅ Implementiert |
| 🐳 Docker | Ein-Befehl-Start mit docker-compose | ✅ Implementiert |
| 📊 BPMN-Analyse | Prozessmodelle und Wirtschaftlichkeit | ⏳ Geplant |

---

## Tech Stack

| Bereich | Technologie |
|---|---|
| **Backend** | Python 3.11 · FastAPI · Pydantic |
| **KI / LLM** | Anthropic Claude (claude-sonnet-4-6) |
| **Frontend** | React · TypeScript · Vite · Tailwind CSS |
| **DevOps** | Docker · docker-compose · GitHub Actions |

---

## Quickstart

```bash
# 1. Repo klonen
git clone https://github.com/intelligent-process-lab/smart-order-processing.git
cd smart-order-processing

# 2. API-Key setzen
cp .env.example .env
# ANTHROPIC_API_KEY in .env eintragen

# 3. Starten
docker-compose up --build
```

**Öffne dann:**
- 🖥️ Dashboard: http://localhost:5173
- 📡 API-Docs: http://localhost:8000/docs

---

## Projektstruktur

```
smart-order-processing/
│
├── src/
│   ├── backend/          ← FastAPI, KI-Extraktion, Validierung
│   │   ├── main.py
│   │   ├── extraktor.py  ← Claude-Agent
│   │   ├── models.py
│   │   └── Dockerfile
│   └── frontend/         ← React Dashboard
│       ├── src/
│       │   ├── App.tsx
│       │   └── components/
│       └── Dockerfile
│
├── data/                 ← Synthetische Testdaten
├── docs/                 ← BPMN, Wirtschaftlichkeitsanalyse
├── docker-compose.yml
└── .env.example
```

---

## Roadmap

| Phase | Zeitraum | Status |
|---|---|---|
| 🔧 Einrichtung & Grundstruktur | Woche 1–2 | ✅ Abgeschlossen |
| 🏗️ Backend & Frontend MVP | Woche 3–4 | ✅ Abgeschlossen |
| 🤖 KI-Pipeline verfeinern | Woche 5–6 | ⏳ Laufend |
| 📊 BPMN & Wirtschaftlichkeit | Woche 7–8 | ⬜ Ausstehend |
| 📋 Fallstudie & Portfolio | Woche 9–10 | ⬜ Ausstehend |

---

## Team

| Person | Rolle | Schwerpunkt |
|---|---|---|
| **Person A** | Wirtschaftsingenieur | Prozessoptimierung · BPMN · Wirtschaftlichkeit |
| **Enes** | KI-Softwareentwickler | Backend · KI-Integration · Frontend · DevOps |

---

<div align="center">

**Intelligent Process Lab** · Open Source · Portfolio-Projekt 2026

</div>
