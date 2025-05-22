"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Edit, MoreHorizontal, Trash, UserCog } from "lucide-react"
import { UserDetailsDialog } from "./user-details-dialog"
import { UserEditDialog } from "./user-edit-dialog"
import { UserDeleteDialog } from "./user-delete-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { User } from "@/lib/types"

interface UserTableProps {
  users: User[]
  totalCount: number
  page: number
  limit: number
  onPageChange: (page: number) => void
  sortBy: string
  sortOrder: "asc" | "desc"
  onSort: (field: string) => void
}

export function UserTable({ users, totalCount, page, limit, onPageChange, sortBy, sortOrder, onSort }: UserTableProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const totalPages = Math.ceil(totalCount / limit)

  const handleViewDetails = (user: User) => {
    setSelectedUser(user)
    setIsDetailsOpen(true)
  }

  const handleEdit = (user: User) => {
    setSelectedUser(user)
    setIsEditOpen(true)
  }

  const handleDelete = (user: User) => {
    setSelectedUser(user)
    setIsDeleteOpen(true)
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  return (
    <>
      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => onSort("email")}
                >
                  Email
                  {sortBy === "email" && <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>}
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => onSort("role")}
                >
                  Role
                  {sortBy === "role" && <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>}
                </TableHead>
                <TableHead>Phone</TableHead>
                <TableHead
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => onSort("status")}
                >
                  Status
                  {sortBy === "status" && <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>}
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => onSort("createdAt")}
                >
                  Joined
                  {sortBy === "createdAt" && <span className="ml-1">{sortOrder === "asc" ? "↑" : "↓"}</span>}
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user._id} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={user.image || "/placeholder.svg"}
                            alt={`${user.firstName} ${user.lastName}`}
                          />
                          <AvatarFallback>{getInitials(user.firstName, user.lastName)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{`${user.firstName} ${user.lastName}`}</p>
                          {user.verified ? (
                            <Badge variant="outline" className="border-green-500 text-green-500 text-xs">
                              Verified
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="border-amber-500 text-amber-500 text-xs">
                              Unverified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          user.role === "ADMIN" ? "border-blue-500 text-blue-500" : "border-slate-500 text-slate-500"
                        }
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.phoneNumber || "-"}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          user.status === "active" ? "border-green-500 text-green-500" : "border-red-500 text-red-500"
                        }
                      >
                        {user.status === "active" ? "Active" : "Deleted"}
                      </Badge>
                    </TableCell>
                    <TableCell>{format(new Date(user.createdAt), "MMM dd, yyyy")}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewDetails(user)}>
                            <UserCog className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEdit(user)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit User
                          </DropdownMenuItem>
                          {/* <DropdownMenuItem
                            onClick={() => handleDelete(user)}
                            className="text-destructive focus:text-destructive"
                          >
                            <Trash className="mr-2 h-4 w-4" />
                            Delete User
                          </DropdownMenuItem> */}
                        </DropdownMenuContent>
                      </DropdownMenu>
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
              Showing {(page - 1) * limit + 1}-{Math.min(page * limit, totalCount)} of {totalCount}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <div className="text-sm">
                Page {page} of {totalPages}
              </div>
              <Button variant="outline" size="sm" onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* User Details Dialog */}
      {selectedUser && (
        <UserDetailsDialog user={selectedUser} isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} />
      )}

      {/* User Edit Dialog */}
      {selectedUser && <UserEditDialog user={selectedUser} isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />}

      {/* User Delete Dialog */}
      {/* {selectedUser && (
        <UserDeleteDialog user={selectedUser} isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} />
      )} */}
    </>
  )
}
