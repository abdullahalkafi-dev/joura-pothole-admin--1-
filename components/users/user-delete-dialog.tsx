"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { toast } from "@/components/ui/use-toast"
import { useDeleteUserMutation } from "@/lib/redux/services/user-api"
import { User } from "@/lib/types"

interface UserDeleteDialogProps {
  user: User
  isOpen: boolean
  onClose: () => void
}

export function UserDeleteDialog({ user, isOpen, onClose }: UserDeleteDialogProps) {
  const [deleteUser, { isLoading }] = useDeleteUserMutation()

  const handleDelete = async () => {
    try {
      await deleteUser(user._id).unwrap()

      toast({
        title: "User deleted",
        description: "User has been deleted successfully",
      })

      onClose()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete user",
        variant: "destructive",
      })
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will {user.status === "active" ? "deactivate" : "permanently delete"} the user account for{" "}
            <span className="font-medium">{`${user.firstName} ${user.lastName}`}</span>. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-destructive text-destructive-foreground"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
