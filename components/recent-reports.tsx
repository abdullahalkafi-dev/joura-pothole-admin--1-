"use client"

import { useGetReportsQuery } from "@/lib/redux/services/reports-api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { formatDistanceToNow } from "date-fns"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import { ReportStatusBadge } from "./report-status-badge"

export function RecentReports() {
  const { data, isLoading, error } = useGetReportsQuery({
    limit: 5,
    sortBy: "createdAt",
    sortOrder: "desc",
  })

  if (error) {
    return (
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Latest infrastructure issues reported</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <p className="text-muted-foreground">Unable to load recent reports</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Latest infrastructure issues reported</CardDescription>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/dashboard/reports">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <Skeleton className="ml-auto h-6 w-16" />
                </div>
              ))}
          </div>
        ) : !data || data.reports.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-muted-foreground">No reports found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {data.reports.map((report) => (
              <Link
                key={report._id}
                href={`/dashboard/reports/${report._id}`}
                className="flex items-start gap-4 p-2 rounded-md hover:bg-muted transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
                  <MapPin className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <p className="font-medium">{report.issue}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="truncate">{report.location.address}</span>
                    <span>•</span>
                    <span className="whitespace-nowrap">
                      {formatDistanceToNow(new Date(report.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                </div>
                <div className="ml-auto">
                  <ReportStatusBadge status={report.status} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
