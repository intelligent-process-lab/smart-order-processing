interface Props {
  gesamt: number
  erfolgreich: number
  fehlerhaft: number
}

export function StatsBar({ gesamt, erfolgreich, fehlerhaft }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
        <p className="text-xs text-gray-400 mb-1">Gesamt</p>
        <p className="text-3xl font-bold text-white">{gesamt}</p>
      </div>
      <div className="bg-gray-800 rounded-xl p-4 border border-green-800">
        <p className="text-xs text-green-400 mb-1">Erfolgreich</p>
        <p className="text-3xl font-bold text-green-400">{erfolgreich}</p>
      </div>
      <div className="bg-gray-800 rounded-xl p-4 border border-red-800">
        <p className="text-xs text-red-400 mb-1">Fehlerhaft</p>
        <p className="text-3xl font-bold text-red-400">{fehlerhaft}</p>
      </div>
    </div>
  )
}
