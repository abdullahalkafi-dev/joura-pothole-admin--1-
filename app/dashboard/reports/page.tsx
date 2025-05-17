import { DashboardHeader } from "@/components/dashboard-header"
import { ReportsFilters } from "@/components/reports-filters"
import { ReportsTable } from "@/components/reports-table"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <DashboardHeader title="All Reports" />
      <ReportsFilters />
      <ReportsTable />
    </div>
  )
}
