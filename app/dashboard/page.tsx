"use client"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentReports } from "@/components/recent-reports"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <DashboardHeader title="Dashboard Overview" />
      <DashboardStats />
      <RecentReports />
    </div>
  )
}
