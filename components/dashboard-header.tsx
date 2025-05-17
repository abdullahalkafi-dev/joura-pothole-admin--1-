import { ModeToggle } from "@/components/mode-toggle"

interface DashboardHeaderProps {
  title: string
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      <div className="flex items-center gap-2 ml-6">
        <ModeToggle />
      </div>
    </div>
  )
}
