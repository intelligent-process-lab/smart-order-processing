# Backend – Smart Order Processing

FastAPI-Backend mit KI-gestützter Auftragsextraktion via Claude.

## Endpoints

| Method | Endpoint | Beschreibung |
|---|---|---|
| `GET` | `/health` | Status-Check |
| `POST` | `/auftrag/text` | Freitext → strukturierter Auftrag |
| `POST` | `/auftrag/datei` | Datei-Upload → strukturierter Auftrag |
| `GET` | `/auftraege` | Alle Aufträge |
| `DELETE` | `/auftraege` | Verlauf leeren |

## Starten

```bash
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
export ANTHROPIC_API_KEY=sk-ant-...
uvicorn main:app --reload --port 8000
```

API-Docs: http://localhost:8000/docs

## Dateien

| Datei | Beschreibung |
|---|---|
| `main.py` | FastAPI App + alle Endpoints |
| `extraktor.py` | Claude-Agent für Datenextraktion + Validierung |
| `models.py` | Pydantic Request/Response Schemas |
