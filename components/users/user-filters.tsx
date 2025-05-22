"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"

interface UserFiltersProps {
  onSearch: (searchTerm: string) => void
  onRoleFilter: (role: string | undefined) => void
  onStatusFilter: (status: string | undefined) => void
  currentRole?: string
  currentStatus?: string
}

export function UserFilters({ onSearch, onRoleFilter, onStatusFilter, currentRole, currentStatus }: UserFiltersProps) {
  const [searchInput, setSearchInput] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchInput)
  }

  const handleReset = () => {
    setSearchInput("")
    onSearch("")
    onRoleFilter(undefined)
    onStatusFilter(undefined)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid gap-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by email..."
              className="pl-8"
              value={searchInput}
              onChange={handleSearchChange}
            />
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={currentRole} onValueChange={onRoleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="ADMIN">Admin</SelectItem>
                <SelectItem value="USER">User</SelectItem>
              </SelectContent>
            </Select>

            <Select value={currentStatus} onValueChange={onStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="delete">Deleted</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={handleReset} className="w-full md:w-auto">
              <X className="mr-2 h-4 w-4" />
              Reset Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
