import { Badge } from "@/components/ui/badge"

interface ReportStatusBadgeProps {
  status: string
}

export function ReportStatusBadge({ status }: ReportStatusBadgeProps) {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return {
          variant: "outline" as const,
          className: "border-amber-500 text-amber-500 dark:border-amber-400 dark:text-amber-400",
        }
      case "in-progress":
        return {
          variant: "outline" as const,
          className: "border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400",
        }
      case "completed":
        return {
          variant: "outline" as const,
          className: "border-green-500 text-green-500 dark:border-green-400 dark:text-green-400",
        }
      case "rejected":
        return {
          variant: "outline" as const,
          className: "border-destructive text-destructive dark:border-red-400 dark:text-red-400",
        }
      default:
        return { variant: "outline" as const, className: "" }
    }
  }

  const config = getStatusConfig(status)

  return (
    <Badge variant={config.variant} className={config.className}>
      {status}
    </Badge>
  )
}
