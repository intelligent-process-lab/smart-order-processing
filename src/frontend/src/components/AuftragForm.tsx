import { useState } from 'react'
import type { VerarbeitungsErgebnis } from '../types'

const API_BASE = import.meta.env.VITE_API_URL ? `https://${import.meta.env.VITE_API_URL}` : ''

interface Props {
  onErgebnis: (ergebnis: VerarbeitungsErgebnis) => void
}

export function AuftragForm({ onErgebnis }: Props) {
  const [text, setText] = useState('')
  const [datei, setDatei] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const beispiel = `Kunde: Mustermann GmbH
Datum: 2026-11-18
Artikel: Laptop Dell XPS 15, Maus Logitech MX Master
Menge: 3x, 5x
Gesamtpreis: 4.750,00 EUR
Bemerkung: Lieferung bis Ende Monat`

  async function absendenText() {
    if (!text.trim()) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/auftrag/text`, {
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

  async function absendenDatei() {
    if (!datei) return
    setLoading(true)
    setError(null)
    try {
      const form = new FormData()
      form.append('datei', datei)
      const res = await fetch(`${API_BASE}/auftrag/datei`, {
        method: 'POST',
        body: form,
      })
      if (!res.ok) throw new Error((await res.json()).detail)
      onErgebnis(await res.json())
      setDatei(null)
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
        className="w-full h-40 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm font-mono text-gray-100 focus:outline-none focus:border-indigo-500 resize-none placeholder-gray-600"
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
          onClick={absendenText}
          disabled={loading || !text.trim()}
          className="flex-1 py-2 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? '⏳ Verarbeite...' : '🤖 Text verarbeiten'}
        </button>
      </div>

      {/* PDF / Datei Upload */}
      <div className="border border-dashed border-gray-700 rounded-lg p-3 flex flex-col gap-2">
        <p className="text-xs text-gray-500 uppercase tracking-wider">Datei-Upload (.txt oder .pdf)</p>
        <div className="flex gap-2 items-center">
          <label className="flex-1 cursor-pointer">
            <input
              type="file"
              accept=".txt,.pdf"
              className="hidden"
              onChange={e => setDatei(e.target.files?.[0] ?? null)}
            />
            <div className="px-3 py-2 text-xs rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 border border-gray-700 text-center transition-colors">
              {datei ? datei.name : '📎 Datei auswählen'}
            </div>
          </label>
          <button
            onClick={absendenDatei}
            disabled={loading || !datei}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? '⏳' : 'Verarbeiten'}
          </button>
        </div>
      </div>

      {error && <p className="text-sm text-red-400">⚠️ {error}</p>}
    </div>
  )
}
