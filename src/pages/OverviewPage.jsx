import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from 'recharts'
import { metrics, timeseries } from '../data/registry'
import KpiCard from '../components/KpiCard'
import SourceTable from '../components/SourceTable'

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metrics.slice(0, 5).map((m) => <KpiCard key={m.id} item={m} />)}
      </section>
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="h-72 rounded-xl border border-slate-800 bg-brand-800 p-3"><ResponsiveContainer><LineChart data={timeseries}><CartesianGrid stroke="#25334d" /><XAxis dataKey="year" /><YAxis /><Tooltip /><Line type="monotone" dataKey="generation" stroke="#22d3ee" /></LineChart></ResponsiveContainer></div>
        <div className="h-72 rounded-xl border border-slate-800 bg-brand-800 p-3"><ResponsiveContainer><BarChart data={timeseries}><CartesianGrid stroke="#25334d" /><XAxis dataKey="year" /><YAxis /><Tooltip /><Bar dataKey="recycling" fill="#4ade80" /></BarChart></ResponsiveContainer></div>
      </section>
      <SourceTable rows={metrics} />
    </div>
  )
}
