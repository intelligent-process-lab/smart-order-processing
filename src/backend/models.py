from pydantic import BaseModel
from typing import Optional


class AuftragsDaten(BaseModel):
    kunde: Optional[str] = None
    artikel: Optional[list[str]] = None
    menge: Optional[list[str]] = None
    gesamtpreis: Optional[str] = None
    datum: Optional[str] = None
    bemerkungen: Optional[str] = None


class VerarbeitungsErgebnis(BaseModel):
    dateiname: str
    status: str
    auftrag: Optional[AuftragsDaten] = None
    validierung: Optional[dict] = None
    fehler: Optional[str] = None


class StatusResponse(BaseModel):
    auftraege_gesamt: int
    erfolgreich: int
    fehlerhaft: int
    auftraege: list[VerarbeitungsErgebnis]
