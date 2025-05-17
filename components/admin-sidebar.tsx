"use client"

import { BarChart3, FileText, Home, LogOut, Menu, Settings, Users } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { useLogoutMutation } from "@/lib/redux/services/auth-api"
import { toast } from "@/components/ui/use-toast"

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useIsMobile()
  const { open, setOpen, openMobile, setOpenMobile } = useSidebar()
  const [mounted, setMounted] = useState(false)
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation()

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile sidebar when navigating
  useEffect(() => {
    if (isMobile && openMobile) {
      setOpenMobile(false)
    }
  }, [pathname, isMobile, openMobile, setOpenMobile])

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const handleLogout = async () => {
    try {
      await logout().unwrap()
      router.push("/login")
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account",
      })
    } catch (error) {
      // Even if the API call fails, we still want to log out locally
      router.push("/login")
      toast({
        title: "Logged out",
        description: "You have been logged out of your account",
      })
    }
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setOpenMobile(true)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <Sidebar className="hidden md:flex">
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">JP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Joura_Pothole</span>
              <span className="text-xs text-muted-foreground">Admin Dashboard</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                <Link href="/dashboard">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/reports")}>
                <Link href="/dashboard/reports">
                  <FileText className="h-4 w-4" />
                  <span>Reports</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/analytics")}>
                <Link href="/dashboard/analytics">
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/users")}>
                <Link href="/dashboard/users">
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/dashboard/settings")}>
                <Link href="/dashboard/settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild onClick={handleLogout} disabled={isLoggingOut}>
                <button className="w-full">
                  <LogOut className="h-4 w-4" />
                  <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Mobile sidebar */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all ${
            openMobile ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpenMobile(false)}
        >
          <div
            className={`fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-sidebar border-r border-sidebar-border p-6 shadow-lg transition-transform duration-300 ${
              openMobile ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">JP</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Joura_Pothole</span>
                  <span className="text-xs text-muted-foreground">Admin Dashboard</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setOpenMobile(false)}>
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </div>
            <nav className="space-y-4">
              <Link
                href="/dashboard"
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive("/dashboard")
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => setOpenMobile(false)}
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/dashboard/reports"
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive("/dashboard/reports")
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => setOpenMobile(false)}
              >
                <FileText className="h-4 w-4" />
                <span>Reports</span>
              </Link>
              <Link
                href="/dashboard/analytics"
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive("/dashboard/analytics")
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => setOpenMobile(false)}
              >
                <BarChart3 className="h-4 w-4" />
                <span>Analytics</span>
              </Link>
              <Link
                href="/dashboard/users"
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive("/dashboard/users")
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => setOpenMobile(false)}
              >
                <Users className="h-4 w-4" />
                <span>Users</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive("/dashboard/settings")
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => setOpenMobile(false)}
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </nav>
            <div className="absolute bottom-6 left-6 right-6">
              <button
                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                <LogOut className="h-4 w-4" />
                <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
