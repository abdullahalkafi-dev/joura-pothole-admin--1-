"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart, BarChart } from "@tremor/react"

interface ReportTrend {
  date: string
  total: number
  pending: number
  inProgress: number
  completed: number
  rejected: number
}

interface ReportTrendsChartProps {
  data?: ReportTrend[]
  isLoading: boolean
  fullWidth?: boolean
}

export function ReportTrendsChart({ data, isLoading, fullWidth = false }: ReportTrendsChartProps) {
  const valueFormatter = (number: number) => `${number}`

  if (isLoading) {
    return (
      <Card className={fullWidth ? "col-span-full" : ""}>
        <CardHeader>
          <CardTitle>Report Trends</CardTitle>
          <CardDescription>Number of reports over time</CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={fullWidth ? "col-span-full" : ""}>
      <CardHeader>
        <CardTitle>Report Trends</CardTitle>
        <CardDescription>Number of reports over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="area">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="area">Area</TabsTrigger>
              <TabsTrigger value="bar">Bar</TabsTrigger>
              <TabsTrigger value="stacked">Stacked</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="area" className="h-[300px]">
            <AreaChart
              className="h-full"
              data={data || []}
              index="date"
              categories={["total"]}
              colors={["blue"]}
              valueFormatter={valueFormatter}
              showLegend={false}
              showAnimation
            />
          </TabsContent>

          <TabsContent value="bar" className="h-[300px]">
            <BarChart
              className="h-full"
              data={data || []}
              index="date"
              categories={["total"]}
              colors={["blue"]}
              valueFormatter={valueFormatter}
              showLegend={false}
              showAnimation
            />
          </TabsContent>

          <TabsContent value="stacked" className="h-[300px]">
            <BarChart
              className="h-full"
              data={data || []}
              index="date"
              categories={["pending", "inProgress", "completed", "rejected"]}
              colors={["amber", "blue", "green", "red"]}
              valueFormatter={valueFormatter}
              stack
              showAnimation
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
