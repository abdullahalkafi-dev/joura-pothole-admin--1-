"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { DonutChart } from "@tremor/react"

interface SeverityData {
  name: string
  value: number
}

interface SeverityDistributionProps {
  data?: SeverityData[]
  isLoading: boolean
}

export function SeverityDistribution({ data, isLoading }: SeverityDistributionProps) {
  const valueFormatter = (number: number) => `${number}`

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Severity Distribution</CardTitle>
          <CardDescription>Breakdown by severity level</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Skeleton className="h-[250px] w-[250px] rounded-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Severity Distribution</CardTitle>
        <CardDescription>Breakdown by severity level</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <DonutChart
          className="h-[250px] w-[250px]"
          data={data || []}
          category="value"
          index="name"
          valueFormatter={valueFormatter}
          colors={["yellow", "orange", "red"]}
          showAnimation
        />
      </CardContent>
    </Card>
  )
}
