// ── components/ui/SectionLabel.tsx ──

interface SectionLabelProps {
  children: React.ReactNode
  color?: string
  showLine?: boolean
  className?: string
}

export default function SectionLabel({
  children,
  color,
  showLine = true,
  className = '',
}: SectionLabelProps) {
  const colorStyle = color ? { color } : undefined
  const lineStyle = color ? { backgroundColor: color } : undefined

  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      {showLine && (
        <span
          className="inline-block w-6 h-px bg-teal-accent"
          style={lineStyle}
          aria-hidden="true"
        />
      )}
      <span
        className="text-xs font-body font-medium uppercase tracking-[0.15em] text-teal-accent"
        style={colorStyle}
      >
        {children}
      </span>
    </div>
  )
}
