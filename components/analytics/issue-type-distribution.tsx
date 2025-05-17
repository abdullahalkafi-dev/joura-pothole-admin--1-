"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonutChart, PieChart } from "@tremor/react"

interface IssueTypeData {
  name: string
  value: number
}

interface IssueTypeDistributionProps {
  data?: IssueTypeData[]
  isLoading: boolean
}

export function IssueTypeDistribution({ data, isLoading }: IssueTypeDistributionProps) {
  const valueFormatter = (number: number) => `${number}`

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Issue Type Distribution</CardTitle>
          <CardDescription>Breakdown by infrastructure issue type</CardDescription>
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
        <CardTitle>Issue Type Distribution</CardTitle>
        <CardDescription>Breakdown by infrastructure issue type</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="donut">
          <div className="flex justify-center mb-4">
            <TabsList>
              <TabsTrigger value="donut">Donut</TabsTrigger>
              <TabsTrigger value="pie">Pie</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="donut" className="flex justify-center">
            <DonutChart
              className="h-[250px] w-[250px]"
              data={data || []}
              category="value"
              index="name"
              valueFormatter={valueFormatter}
              colors={["blue", "cyan", "indigo", "violet"]}
              showAnimation
            />
          </TabsContent>

          <TabsContent value="pie" className="flex justify-center">
            <PieChart
              className="h-[250px] w-[250px]"
              data={data || []}
              category="value"
              index="name"
              valueFormatter={valueFormatter}
              colors={["blue", "cyan", "indigo", "violet"]}
              showAnimation
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
