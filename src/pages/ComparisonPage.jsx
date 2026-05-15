import { companyComparison } from '../data/registry'

export default function ComparisonPage() {
  return <div className="rounded-xl border border-slate-800 bg-brand-800 p-4"><h2 className="mb-3 text-lg">Comparativo de Empresas</h2><div className="overflow-x-auto"><table className="min-w-full text-sm"><thead><tr>{['Empresa','Aterros','Projetos de Biogás','Margem EBITDA','Dívida Líq./EBITDA','Status'].map(h=><th key={h} className="px-2 py-2 text-left">{h}</th>)}</tr></thead><tbody>{companyComparison.map(r=><tr key={r.company} className="border-t border-slate-800"><td className="px-2 py-2">{r.company}</td><td>{r.landfillAssets}</td><td>{r.biogasProjects}</td><td>{r.ebitdaMargin}%</td><td>{r.netDebtEbitda}x</td><td>{r.status}</td></tr>)}</tbody></table></div></div>
}
