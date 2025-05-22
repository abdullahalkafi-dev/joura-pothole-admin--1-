"use client"
import { DashboardHeader } from "@/components/dashboard-header"
// import { ReportsFilters } from "@/components/reports-filters"
// import { ReportsTable } from "@/components/reports-table"
import dynamic from "next/dynamic"

const ReportsFilters  =dynamic(
  () => import("@/components/reports-filters").then((mod) => mod.ReportsFilters),
  { ssr: false }
)
const ReportsTable = dynamic(
  () => import("@/components/reports-table").then((mod) => mod.ReportsTable),
  { ssr: false }
)


export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <DashboardHeader title="All Reports" />
      <ReportsFilters />
      <ReportsTable />
    </div>
  )
}
