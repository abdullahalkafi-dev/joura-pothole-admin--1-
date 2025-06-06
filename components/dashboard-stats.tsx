"use client"

import { useGetStatsQuery } from "@/lib/redux/services/reports-api"
import { AlertTriangle, CheckCircle, Clock, FileText, XCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { JSX } from "react"


export function DashboardStats() {
  const { data: stats, isLoading, error } = useGetStatsQuery(undefined)
     console.log(stats);
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Card key={i} className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <Skeleton className="h-4 w-24" />
                </CardTitle>
                <Skeleton className="h-4 w-4 rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-4 w-32 mt-2" />
              </CardContent>
            </Card>
          ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {["Total Reports", "Pending", "In Progress", "Completed", "Rejected"].map((title) => (
          <Card key={title} className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              <div className="h-4 w-4 rounded-full bg-muted" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-muted">-</div>
              <p className="text-xs text-muted-foreground">Unable to load data</p>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

const statCards = stats ? [
  {
    title: "Total Reports",
    value: stats.find((stat:any)=>stat.name =="totalReports" ).value || 0,
    description: "All time reports",
    icon: <FileText className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Pending",
    value: stats.find((stat:any)=>stat.name =="open" ).value || 0,
    description: "Awaiting verification",
    icon: <Clock className="h-4 w-4 text-amber-500 dark:text-amber-400" />,
  },
  {
    title: "In Progress",
    value:stats.find((stat:any)=>stat.name =="inProgress" ).value || 0,
    description: "Currently being fixed",
    icon: <AlertTriangle className="h-4 w-4 text-blue-500 dark:text-blue-400" />,
  },
  {
    title: "Completed",
    value: stats.find((stat:any)=>stat.name =="resolved" ).value || 0,
    description: "Successfully resolved",
    icon: <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />,
  },
  {
    title: "Rejected",
    value:  stats.find((stat:any)=>stat.name =="rejected" ).value || 0,
    description: "Reports rejected",
    icon: <XCircle className="h-4 w-4 text-red-500 dark:text-red-400" />,
  }
] : [];


  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {statCards.map((card: StatCard) => (
        <Card key={card.title} className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
// Define the types for stats and stat cards
type Stats =any[]

interface StatCard {
  title: string;
  value: number;
  description: string;
  icon: JSX.Element;
}