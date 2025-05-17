import type React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-muted/30 dark:bg-background">
      <AdminSidebar />
      <SidebarInset className="p-0 md:p-0 w-full">
        <div className="h-full w-full overflow-auto">{children}</div>
      </SidebarInset>
    </div>
  )
}
