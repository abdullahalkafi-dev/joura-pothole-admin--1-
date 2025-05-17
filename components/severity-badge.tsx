import { Badge } from "@/components/ui/badge"

interface SeverityBadgeProps {
  severity: string
}

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  const getSeverityConfig = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "mild":
        return {
          variant: "outline" as const,
          className: "border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400",
        }
      case "moderate":
        return {
          variant: "outline" as const,
          className: "border-orange-500 text-orange-500 dark:border-orange-400 dark:text-orange-400",
        }
      case "severe":
        return {
          variant: "outline" as const,
          className: "border-red-500 text-red-500 dark:border-red-400 dark:text-red-400",
        }
      default:
        return { variant: "outline" as const, className: "" }
    }
  }

  const config = getSeverityConfig(severity)

  return (
    <Badge variant={config.variant} className={config.className}>
      {severity}
    </Badge>
  )
}
