import { DashboardHeader } from "@/components/dashboard-header"
import { UserManagement } from "@/components/users/user-management"

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <DashboardHeader title="User Management" />
      <UserManagement />
    </div>
  )
}
