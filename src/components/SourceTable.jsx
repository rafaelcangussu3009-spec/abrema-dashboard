export default function SourceTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-900">
          <tr>
            {['Métrica', 'Valor', 'Período', 'Fonte', 'Link', 'Atualizado'].map((h) => <th key={h} className="px-3 py-2 text-left">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-slate-800">
              <td className="px-3 py-2">{r.label}</td><td className="px-3 py-2">{r.value}</td><td className="px-3 py-2">{r.period}</td><td className="px-3 py-2">{r.sourceId}</td>
              <td className="px-3 py-2"><a className="text-cyan-400" href={r.sourceLink} target="_blank" rel="noreferrer">Fonte</a></td>
              <td className="px-3 py-2">{r.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
