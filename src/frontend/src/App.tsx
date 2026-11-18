import { useState } from 'react'
import { StatsBar } from './components/StatsBar'
import { AuftragForm } from './components/AuftragForm'
import { ErgebnisKarte } from './components/ErgebnisKarte'
import type { VerarbeitungsErgebnis } from './types'

export default function App() {
  const [auftraege, setAuftraege] = useState<VerarbeitungsErgebnis[]>([])

  function handleErgebnis(ergebnis: VerarbeitungsErgebnis) {
    setAuftraege(prev => [ergebnis, ...prev])
  }

  const erfolgreich = auftraege.filter(a => a.status === 'erfolgreich').length
  const fehlerhaft = auftraege.filter(a => a.status === 'fehler').length

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4 flex items-center gap-3">
        <span className="text-2xl">🧠</span>
        <div>
          <h1 className="text-lg font-bold text-white">Smart Order Processing</h1>
          <p className="text-xs text-gray-400">KI-gestützte Auftragsverarbeitung · Powered by Claude</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs text-gray-400">System aktiv</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-8">
        {/* Stats */}
        <StatsBar
          gesamt={auftraege.length}
          erfolgreich={erfolgreich}
          fehlerhaft={fehlerhaft}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input */}
          <section>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Auftragstext eingeben
            </h2>
            <AuftragForm onErgebnis={handleErgebnis} />
          </section>

          {/* Ergebnisse */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Verarbeitete Aufträge
              </h2>
              {auftraege.length > 0 && (
                <button
                  onClick={() => setAuftraege([])}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Alle löschen
                </button>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {auftraege.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-gray-600 gap-2">
                  <span className="text-4xl">📋</span>
                  <p className="text-sm">Noch keine Aufträge verarbeitet</p>
                </div>
              ) : (
                auftraege.map((a, i) => <ErgebnisKarte key={i} ergebnis={a} />)
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
