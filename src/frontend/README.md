# Frontend – Smart Order Processing

React + TypeScript + Tailwind CSS Dashboard für die Auftragsverarbeitung.

## Starten

```bash
npm install
npm run dev
```

Dashboard: http://localhost:5173  
*(Backend muss auf Port 8000 laufen)*

## Komponenten

| Komponente | Beschreibung |
|---|---|
| `App.tsx` | Haupt-Layout, State-Management |
| `StatsBar.tsx` | Live-Statistiken (Gesamt / Erfolgreich / Fehlerhaft) |
| `AuftragForm.tsx` | Texteingabe mit Beispiel-Button |
| `ErgebnisKarte.tsx` | Strukturiertes Ergebnis mit Validierungs-Badges |
| `types.ts` | TypeScript Interfaces |

## Build

```bash
npm run build   # Produktions-Build
npx tsc --noEmit  # Type-Check
```
