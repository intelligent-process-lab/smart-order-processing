export interface AuftragsDaten {
  kunde: string | null
  artikel: string[] | null
  menge: string[] | null
  gesamtpreis: string | null
  datum: string | null
  bemerkungen: string | null
}

export interface Validierung {
  gueltig: boolean
  fehler: string[]
  warnungen: string[]
}

export interface VerarbeitungsErgebnis {
  dateiname: string
  status: 'erfolgreich' | 'warnung' | 'fehler'
  auftrag?: AuftragsDaten
  validierung?: Validierung
  fehler?: string
}

export interface StatusResponse {
  auftraege_gesamt: number
  erfolgreich: number
  fehlerhaft: number
  auftraege: VerarbeitungsErgebnis[]
}
