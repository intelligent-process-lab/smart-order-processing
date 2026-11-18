import { useState } from 'react'
import type { VerarbeitungsErgebnis } from '../types'

interface Props {
  onErgebnis: (ergebnis: VerarbeitungsErgebnis) => void
}

export function AuftragForm({ onErgebnis }: Props) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const beispiel = `Kunde: Mustermann GmbH
Datum: 2026-11-18
Artikel: Laptop Dell XPS 15, Maus Logitech MX Master
Menge: 3x, 5x
Gesamtpreis: 4.750,00 EUR
Bemerkung: Lieferung bis Ende Monat`

  async function absenden() {
    if (!text.trim()) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/auftrag/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      if (!res.ok) throw new Error((await res.json()).detail)
      onErgebnis(await res.json())
      setText('')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Fehler')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full h-48 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm font-mono text-gray-100 focus:outline-none focus:border-indigo-500 resize-none placeholder-gray-600"
        placeholder="Auftragstext hier einfügen..."
        spellCheck={false}
      />
      <div className="flex gap-2">
        <button
          onClick={() => setText(beispiel)}
          className="px-3 py-2 text-xs rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
        >
          Beispiel laden
        </button>
        <button
          onClick={absenden}
          disabled={loading || !text.trim()}
          className="flex-1 py-2 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? '⏳ Verarbeite...' : '🤖 Auftrag verarbeiten'}
        </button>
      </div>
      {error && <p className="text-sm text-red-400">⚠️ {error}</p>}
    </div>
  )
}
