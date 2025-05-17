"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { BarChart } from "@tremor/react"

interface ResolutionTimeData {
  issueType: string
  averageDays: number
}

interface ResolutionTimeChartProps {
  data?: ResolutionTimeData[]
  isLoading: boolean
}

export function ResolutionTimeChart({ data, isLoading }: ResolutionTimeChartProps) {
  const valueFormatter = (number: number) => `${number} days`

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resolution Time</CardTitle>
          <CardDescription>Average days to resolve by issue type</CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resolution Time</CardTitle>
        <CardDescription>Average days to resolve by issue type</CardDescription>
      </CardHeader>
      <CardContent>
        <BarChart
          className="h-[300px]"
          data={data || []}
          index="issueType"
          categories={["averageDays"]}
          colors={["blue"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          showAnimation
        />
      </CardContent>
    </Card>
  )
}
