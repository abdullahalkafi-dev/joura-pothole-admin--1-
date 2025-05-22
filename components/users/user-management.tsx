"use client"

import { useState } from "react"
import { UserTable } from "./user-table"
import { UserFilters } from "./user-filters"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useGetUsersQuery } from "@/lib/redux/services/user-api"

export function UserManagement() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [searchTerm, setSearch] = useState("")
  const [role, setRole] = useState<string | undefined>(undefined)
  const [status, setStatus] = useState<string | undefined>(undefined)
  const [sortBy, setSortBy] = useState("createdAt")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const { data, isLoading, error } = useGetUsersQuery({
    page,
    limit,
    searchTerm,
    role,
    status,
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
    setPage(newPage)
  }

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm)
    setPage(1) // Reset to first page on new searchTerm
  }

  const handleRoleFilter = (newRole: string | undefined) => {
    setRole(newRole)
    setPage(1)
  }

  const handleStatusFilter = (newStatus: string | undefined) => {
    setStatus(newStatus)
    setPage(1)
  }

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center py-10">
          <h3 className="text-lg font-medium text-destructive mb-2">Error loading users</h3>
          <p className="text-muted-foreground">There was a problem connecting to the server. Please try again later.</p>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <UserFilters
        onSearch={handleSearch}
        onRoleFilter={handleRoleFilter}
        onStatusFilter={handleStatusFilter}
        currentRole={role}
        currentStatus={status}
      />

      {isLoading ? (
        <Card className="p-6">
          <div className="space-y-4">
            <Skeleton className="h-8 w-full" />
            <div className="space-y-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
            </div>
          </div>
        </Card>
      ) : (
        <UserTable
          users={data?.users || []}
          totalCount={data?.totalCount || 0}
          page={page}
          limit={limit}
          onPageChange={handlePageChange}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={handleSort}
        />
      )}
    </div>
  )
}
