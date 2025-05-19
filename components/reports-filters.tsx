"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"

export function ReportsFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [issueType, setIssueType] = useState(searchParams.get("issue") || "")
  const [severity, setSeverity] = useState(searchParams.get("severity") || "")
  const [status, setStatus] = useState(searchParams.get("status") || "")
  const [searchQuery, setSearchQuery] = useState(searchParams.get("searchTerm") || "")

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (issueType) params.set("issue", issueType)
    if (severity) params.set("severity", severity)
    if (status) params.set("status", status)
    if (searchQuery) params.set("searchTerm", searchQuery)

    router.push(`${pathname}?${params.toString()}`)
  }

  const resetFilters = () => {
    setIssueType("")
    setSeverity("")
    setStatus("")
    setSearchQuery("")
    router.push(pathname)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by description or address..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={issueType} onValueChange={setIssueType}>
              <SelectTrigger>
                <SelectValue placeholder="Issue Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Pothole">Pothole</SelectItem>
                <SelectItem value="Manhole">Manhole</SelectItem>
                <SelectItem value="Road Crack">Road Crack</SelectItem>
                <SelectItem value="Water Leakage">Water Leakage</SelectItem>
              </SelectContent>
            </Select>

            <Select value={severity} onValueChange={setSeverity}>
              <SelectTrigger>
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="Mild">Mild</SelectItem>
                <SelectItem value="Moderate">Moderate</SelectItem>
                <SelectItem value="Severe">Severe</SelectItem>
              </SelectContent>
            </Select>

            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="In-Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Button onClick={applyFilters}>Apply Filters</Button>
            <Button variant="outline" onClick={resetFilters}>
              <X className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
