"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useGetReportsQuery } from "@/lib/redux/services/reports-api"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ReportStatusBadge } from "./report-status-badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft, ChevronRight, Eye, MapPin } from "lucide-react"
import { format } from "date-fns"
import { SeverityBadge } from "./severity-badge"

export function ReportsTable() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = 10

  const issue = searchParams.get("issue") || undefined
  const severity = searchParams.get("severity") || undefined
  const status = searchParams.get("status") || undefined
  const search = searchParams.get("search") || undefined

  const [sortBy, setSortBy] = useState("createdAt")
  const [sortOrder, setSortOrder] = useState("desc")

  const { data, isLoading, isFetching, error } = useGetReportsQuery({
    page,
    limit,
    issue,
    severityLevel: severity,
    status,
    search,
    sortBy,
    sortOrder,
  })

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("asc")
    }
  }

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", newPage.toString())
    router.push(`?${params.toString()}`)
  }

  const viewReport = (id: string) => {
    router.push(`/dashboard/reports/${id}`)
  }

  const totalPages = data ? Math.ceil(data.totalCount / limit) : 0

  if (error) {
    return (
      <Card className="bg-card p-6">
        <div className="text-center py-10">
          <h3 className="text-lg font-medium text-destructive mb-2">Error loading reports</h3>
          <p className="text-muted-foreground">There was a problem connecting to the server. Please try again later.</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="bg-card">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSort("issue")}
              >
                Issue Type
                {sortBy === "issue" && <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>}
              </TableHead>
              <TableHead>Location</TableHead>
              <TableHead
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSort("severityLevel")}
              >
                Severity
                {sortBy === "severityLevel" && <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>}
              </TableHead>
              <TableHead
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSort("status")}
              >
                Status
                {sortBy === "status" && <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>}
              </TableHead>
              <TableHead
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleSort("createdAt")}
              >
                Reported On
                {sortBy === "createdAt" && <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>}
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading || isFetching ? (
              Array(10)
                .fill(0)
                .map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton className="h-4 w-16" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-24" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-32" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-24" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-8 w-8" />
                    </TableCell>
                  </TableRow>
                ))
            ) : !data || data.reports.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No reports found
                </TableCell>
              </TableRow>
            ) : (
              data.reports.map((report) => (
                <TableRow key={report._id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{report._id.substring(0, 8)}...</TableCell>
                  <TableCell>{report.issue}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="truncate max-w-[200px]" title={report.location.address}>
                        {report.location.address}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <SeverityBadge severity={report.severityLevel} />
                  </TableCell>
                  <TableCell>
                    <ReportStatusBadge status={report.status} />
                  </TableCell>
                  <TableCell>{format(new Date(report.createdAt), "MMM dd, yyyy")}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => viewReport(report._id)}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="flex items-center justify-between px-4 py-4 border-t">
          <div className="text-sm text-muted-foreground">
            Showing {(page - 1) * limit + 1}-{Math.min(page * limit, data?.totalCount || 0)} of {data?.totalCount || 0}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <div className="text-sm">
              Page {page} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= totalPages}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}
