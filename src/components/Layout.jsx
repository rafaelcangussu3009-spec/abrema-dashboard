import { NavLink } from 'react-router-dom'

const links = [
  ['/', 'Visão Geral'],
  ['/comparativo', 'Comparativo'],
  ['/orizon', 'Orizon'],
  ['/abrema', 'ABREMA'],
  ['/biometano', 'Biometano'],
  ['/esg-carbono', 'ESG & Carbono'],
]

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-800 bg-brand-800/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <h1 className="text-xl font-semibold">ABREMA Intelligence Dashboard</h1>
          <p className="text-sm text-slate-300">Mercado brasileiro de resíduos sólidos, aterros, reciclagem, biogás e biometano</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-4 px-4 py-6">
        <aside className="col-span-12 rounded-xl border border-slate-800 bg-brand-800 p-3 lg:col-span-3">
          <nav className="space-y-2">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `block rounded px-3 py-2 text-sm ${isActive ? 'bg-cyan-700 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="col-span-12 lg:col-span-9">{children}</main>
      </div>
    </div>
  )
}
