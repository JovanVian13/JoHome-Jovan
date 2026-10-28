import type { Stat } from '../types'

function StatItem({ value, label }: Stat) {
  return (
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-bold text-textColor">{label}</dt>
      <dd className="text-3xl font-bold text-textColor">{value}K+</dd>
    </div>
  )
}

export default StatItem
