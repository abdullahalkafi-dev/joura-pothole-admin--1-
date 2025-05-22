"use client"

import { format } from "date-fns"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User } from '../../lib/types';

interface UserDetailsDialogProps {
  user: User
  isOpen: boolean
  onClose: () => void
}

export function UserDetailsDialog({ user, isOpen, onClose }: UserDetailsDialogProps) {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
          <DialogDescription>Detailed information about this user.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.image || "/placeholder.svg"} alt={`${user.firstName} ${user.lastName}`} />
              <AvatarFallback className="text-lg">{getInitials(user.firstName, user.lastName)}</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold">{`${user.firstName} ${user.lastName}`}</h3>
            <div className="flex gap-2">
              <Badge
                variant="outline"
                className={user.role === "ADMIN" ? "border-blue-500 text-blue-500" : "border-slate-500 text-slate-500"}
              >
                {user.role}
              </Badge>
              <Badge
                variant="outline"
                className={user.status === "active" ? "border-green-500 text-green-500" : "border-red-500 text-red-500"}
              >
                {user.status === "active" ? "Active" : "Deleted"}
              </Badge>
              {user.verified ? (
                <Badge variant="outline" className="border-green-500 text-green-500">
                  Verified
                </Badge>
              ) : (
                <Badge variant="outline" className="border-amber-500 text-amber-500">
                  Unverified
                </Badge>
              )}
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 gap-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="font-mono">{user.email}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Phone Number</p>
              <p>{user.phoneNumber || "Not provided"}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Address</p>
              <p>{user.address || "Not provided"}</p>
            </div>

            {user.dateOfBirth && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Date of Birth</p>
                <p>{format(new Date(user.dateOfBirth), "MMMM dd, yyyy")}</p>
              </div>
            )}

            <div>
              <p className="text-sm font-medium text-muted-foreground">Joined</p>
              <p>{format(new Date(user.createdAt), "MMMM dd, yyyy 'at' h:mm a")}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Last Updated</p>
              <p>{format(new Date(user.updatedAt), "MMMM dd, yyyy 'at' h:mm a")}</p>
            </div>

            {user.passwordChangedAt && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Password Last Changed</p>
                <p>{format(new Date(user.passwordChangedAt), "MMMM dd, yyyy 'at' h:mm a")}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
