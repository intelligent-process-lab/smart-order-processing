"""FastAPI Backend – Smart Order Processing."""

from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from extraktor import extrahiere_auftrag, validiere_auftrag
from models import AuftragsDaten, VerarbeitungsErgebnis, StatusResponse

app = FastAPI(
    title="Smart Order Processing API",
    description="KI-gestützte Auftragsverarbeitung mit Claude",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

_verlauf: list[VerarbeitungsErgebnis] = []


@app.get("/health")
def health():
    return {"status": "ok", "version": "1.0.0"}


@app.post("/auftrag/text", response_model=VerarbeitungsErgebnis)
def auftrag_aus_text(payload: dict):
    text = payload.get("text", "").strip()
    if not text:
        raise HTTPException(status_code=400, detail="Text darf nicht leer sein.")
    try:
        daten = extrahiere_auftrag(text)
        validierung = validiere_auftrag(daten)
        ergebnis = VerarbeitungsErgebnis(
            dateiname="text-eingabe",
            status="erfolgreich" if validierung["gueltig"] else "warnung",
            auftrag=AuftragsDaten(**daten),
            validierung=validierung,
        )
    except Exception as e:
        ergebnis = VerarbeitungsErgebnis(
            dateiname="text-eingabe",
            status="fehler",
            fehler=str(e),
        )
    _verlauf.append(ergebnis)
    return ergebnis


@app.post("/auftrag/datei", response_model=VerarbeitungsErgebnis)
async def auftrag_aus_datei(datei: UploadFile = File(...)):
    inhalt = await datei.read()
    try:
        text = inhalt.decode("utf-8")
    except UnicodeDecodeError:
        raise HTTPException(status_code=400, detail="Nur UTF-8-kodierte Textdateien werden unterstützt.")
    try:
        daten = extrahiere_auftrag(text)
        validierung = validiere_auftrag(daten)
        ergebnis = VerarbeitungsErgebnis(
            dateiname=datei.filename or "unbekannt",
            status="erfolgreich" if validierung["gueltig"] else "warnung",
            auftrag=AuftragsDaten(**daten),
            validierung=validierung,
        )
    except Exception as e:
        ergebnis = VerarbeitungsErgebnis(
            dateiname=datei.filename or "unbekannt",
            status="fehler",
            fehler=str(e),
        )
    _verlauf.append(ergebnis)
    return ergebnis


@app.get("/auftraege", response_model=StatusResponse)
def alle_auftraege():
    erfolgreich = sum(1 for a in _verlauf if a.status == "erfolgreich")
    fehlerhaft = sum(1 for a in _verlauf if a.status == "fehler")
    return StatusResponse(
        auftraege_gesamt=len(_verlauf),
        erfolgreich=erfolgreich,
        fehlerhaft=fehlerhaft,
        auftraege=_verlauf,
    )


@app.delete("/auftraege")
def verlauf_loeschen():
    _verlauf.clear()
    return {"message": "Verlauf geleert"}
