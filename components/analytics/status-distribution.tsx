"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { BarList } from "@tremor/react"

interface StatusData {
  name: string
  value: number
  color: string
}

interface StatusDistributionProps {
  data?: StatusData[]
  isLoading: boolean
}

export function StatusDistribution({ data, isLoading }: StatusDistributionProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Status Distribution</CardTitle>
          <CardDescription>Current status of all reports</CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[250px] w-full" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Status Distribution</CardTitle>
        <CardDescription>Current status of all reports</CardDescription>
      </CardHeader>
      <CardContent>
        <BarList data={data || []} valueFormatter={(number) => `${number}`} showAnimation className="h-[250px]" />
      </CardContent>
    </Card>
  )
}
