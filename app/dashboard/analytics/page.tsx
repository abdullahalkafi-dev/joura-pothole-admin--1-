import { DashboardHeader } from "@/components/dashboard-header"
import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <DashboardHeader title="Analytics Dashboard" />
      <AnalyticsDashboard />
    </div>
  )
}
