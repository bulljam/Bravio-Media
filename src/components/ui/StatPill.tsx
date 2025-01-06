type StatPillProps = {
  value: string
  label: string
}

export function StatPill({ value, label }: StatPillProps) {
  return (
    <div className="stat-pill">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}
