import { motion } from 'framer-motion'

export default function KpiCard({ item }) {
  const badge = item.status === 'placeholder' ? 'Placeholder' : item.status === 'estimated' ? 'Estimado' : 'Reportado'
  const badgeColor = item.status === 'placeholder' ? 'bg-amber-700' : item.status === 'estimated' ? 'bg-blue-700' : 'bg-emerald-700'
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-slate-800 bg-brand-800 p-4">
      <div className="text-xs text-slate-400">{item.label}</div>
      <div className="mt-1 text-2xl font-semibold">{item.value}</div>
      <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
        <span>{item.period}</span>
        <span className={`rounded px-2 py-1 ${badgeColor}`}>{badge}</span>
      </div>
    </motion.div>
  )
}
