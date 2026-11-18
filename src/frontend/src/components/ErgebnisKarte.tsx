import type { VerarbeitungsErgebnis } from '../types'

interface Props {
  ergebnis: VerarbeitungsErgebnis
}

const statusConfig = {
  erfolgreich: { farbe: 'border-green-700 bg-green-900/20', icon: '✅', text: 'text-green-400' },
  warnung:     { farbe: 'border-yellow-700 bg-yellow-900/20', icon: '⚠️', text: 'text-yellow-400' },
  fehler:      { farbe: 'border-red-700 bg-red-900/20', icon: '❌', text: 'text-red-400' },
}

export function ErgebnisKarte({ ergebnis }: Props) {
  const cfg = statusConfig[ergebnis.status]

  return (
    <div className={`rounded-xl border p-4 ${cfg.farbe}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-sm text-gray-300">{ergebnis.dateiname}</span>
        <span className={`text-sm font-semibold ${cfg.text}`}>{cfg.icon} {ergebnis.status}</span>
      </div>

      {ergebnis.fehler && (
        <p className="text-sm text-red-300">{ergebnis.fehler}</p>
      )}

      {ergebnis.auftrag && (
        <div className="grid grid-cols-2 gap-2 text-sm">
          {ergebnis.auftrag.kunde && (
            <div><span className="text-gray-500">Kunde:</span> <span className="text-gray-200">{ergebnis.auftrag.kunde}</span></div>
          )}
          {ergebnis.auftrag.datum && (
            <div><span className="text-gray-500">Datum:</span> <span className="text-gray-200">{ergebnis.auftrag.datum}</span></div>
          )}
          {ergebnis.auftrag.gesamtpreis && (
            <div><span className="text-gray-500">Preis:</span> <span className="text-gray-200">{ergebnis.auftrag.gesamtpreis}</span></div>
          )}
          {ergebnis.auftrag.artikel && ergebnis.auftrag.artikel.length > 0 && (
            <div className="col-span-2">
              <span className="text-gray-500">Artikel:</span>{' '}
              <span className="text-gray-200">{ergebnis.auftrag.artikel.join(', ')}</span>
            </div>
          )}
        </div>
      )}

      {ergebnis.validierung && (
        <div className="mt-2 flex flex-wrap gap-1">
          {ergebnis.validierung.fehler.map((f, i) => (
            <span key={i} className="text-xs bg-red-900/50 text-red-300 px-2 py-0.5 rounded">{f}</span>
          ))}
          {ergebnis.validierung.warnungen.map((w, i) => (
            <span key={i} className="text-xs bg-yellow-900/50 text-yellow-300 px-2 py-0.5 rounded">{w}</span>
          ))}
        </div>
      )}
    </div>
  )
}
