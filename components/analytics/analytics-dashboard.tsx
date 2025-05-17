"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReportTrendsChart } from "./report-trends-chart"
import { IssueTypeDistribution } from "./issue-type-distribution"
import { SeverityDistribution } from "./severity-distribution"
import { ResolutionTimeChart } from "./resolution-time-chart"
import { StatusDistribution } from "./status-distribution"
import { GeographicDistribution } from "./geographic-distribution"
import { DateRangePicker } from "./date-range-picker"
import { useGetAnalyticsDataQuery } from "@/lib/redux/services/analytics-api"
import { Skeleton } from "@/components/ui/skeleton"

export function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState<{
    from: Date
    to: Date
  }>({
    from: new Date(new Date().setMonth(new Date().getMonth() - 3)),
    to: new Date(),
  })

  const { data, isLoading, error } = useGetAnalyticsDataQuery({
    startDate: dateRange.from.toISOString(),
    endDate: dateRange.to.toISOString(),
  })

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error Loading Analytics</CardTitle>
          <CardDescription>There was a problem fetching the analytics data.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <p className="text-destructive">Failed to load analytics data. Please try again later.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Card className="w-full md:w-auto">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Date Range</CardTitle>
          </CardHeader>
          <CardContent>
            <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Total Reports" value={data?.totalReports} isLoading={isLoading} description="All time" />
          <StatCard
            title="Avg. Resolution Time"
            value={data?.averageResolutionTime ? `${data.averageResolutionTime} days` : "-"}
            isLoading={isLoading}
            description="Time to fix"
          />
          <StatCard
            title="Completion Rate"
            value={data?.completionRate ? `${data.completionRate}%` : "-"}
            isLoading={isLoading}
            description="Reports completed"
          />
          <StatCard
            title="Active Reports"
            value={data?.activeReports}
            isLoading={isLoading}
            description="Pending + In Progress"
          />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
          <TabsTrigger value="geographic">Geographic</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <ReportTrendsChart data={data?.reportTrends} isLoading={isLoading} />
            <StatusDistribution data={data?.statusDistribution} isLoading={isLoading} />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <IssueTypeDistribution data={data?.issueTypeDistribution} isLoading={isLoading} />
            <SeverityDistribution data={data?.severityDistribution} isLoading={isLoading} />
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <ReportTrendsChart data={data?.reportTrends} isLoading={isLoading} fullWidth />
          <ResolutionTimeChart data={data?.resolutionTimes} isLoading={isLoading} />
        </TabsContent>

        <TabsContent value="distribution" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <IssueTypeDistribution data={data?.issueTypeDistribution} isLoading={isLoading} />
            <SeverityDistribution data={data?.severityDistribution} isLoading={isLoading} />
            <StatusDistribution data={data?.statusDistribution} isLoading={isLoading} />
          </div>
        </TabsContent>

        <TabsContent value="geographic" className="space-y-4">
          <GeographicDistribution data={data?.geographicDistribution} isLoading={isLoading} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface StatCardProps {
  title: string
  value?: number | string
  description: string
  isLoading: boolean
}

function StatCard({ title, value, description, isLoading }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? <Skeleton className="h-7 w-16" /> : <div className="text-2xl font-bold">{value || "-"}</div>}
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
