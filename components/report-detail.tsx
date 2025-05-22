"use client"

import { useState } from "react"
import { useUpdateReportStatusMutation } from "@/lib/redux/services/reports-api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReportStatusBadge } from "./report-status-badge"
import { SeverityBadge } from "./severity-badge"
import { format } from "date-fns"
import { AlertCircle, Calendar, MapPin, User, Verified } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ReportMapView } from "./report-map-view"

interface Report {
  _id: string
  issue: string
  severityLevel: string
  location: {
    coordinates: [number, number]
    address: string
  }
  description: string
  images: string[]
  videos: string[]
  status: string
  user: {
    _id: string
    firstName: string,
    lastName: string
    email: string
  }
  createdAt: string
  updatedAt: string
}

interface ReportDetailProps {
  report: Report
  verificationInfo:any
}

export function ReportDetail({ report ,verificationInfo}: ReportDetailProps) {
  const [status, setStatus] = useState(report.status)
  const [comment, setComment] = useState("")
  const [updateStatus, { isLoading }] = useUpdateReportStatusMutation()

  const handleStatusUpdate = async () => {
    try {
      await updateStatus({
        id: report._id,
        status,
        comment,
      }).unwrap()

      toast({
        title: "Status updated",
        description: `Report status has been updated to ${status}`,
      })
    } catch (error) {
      toast({
        title: "Error updating status",
        description: "There was an error updating the report status",
        variant: "destructive",
      })
    }
  }
 console.log(verificationInfo ? verificationInfo?.data: null);
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="space-y-6 md:col-span-2">
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{report.issue}</CardTitle>
                <CardDescription>
                  Reported on {format(new Date(report.createdAt), "MMMM dd, yyyy 'at' h:mm a")}
                </CardDescription>
              </div>
              <ReportStatusBadge status={report.status} />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Severity</p>
                <div className="mt-1">
                  <SeverityBadge severity={report.severityLevel} />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground mt-1">{report.location.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Reported By</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {report.user.firstName + report.user.lastName} ({report.user.email})
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Timeline </p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 dark:bg-green-400" />
                    <p className="text-sm">Created: {format(new Date(report.createdAt), "MMM dd, yyyy 'at' h:mm a")}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                    <p className="text-sm">
                      Last Updated: {format(new Date(report.updatedAt), "MMM dd, yyyy 'at' h:mm a")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Verified className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className=" ">
                <p className="font-medium">Public Verification  , Total  {verificationInfo?.data?.totalVerifications}   </p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500 dark:bg-red-400" />
                    <p className="text-sm"> No : {verificationInfo?.data?.statusCounts?.No ? verificationInfo?.data?.statusCounts?.No : "0"}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full  bg-green-500 dark:bg-green-400 " />
                    <p className="text-sm">
                     Yes: {verificationInfo?.data?.statusCounts?.Yes ? verificationInfo?.data?.statusCounts?.Yes : "0"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full  bg-blue-500 dark:bg-blue-400 " />
                    <p className="text-sm">
                    I don't know: {verificationInfo ? verificationInfo?.data?.statusCounts?.["I don't know"] : "0"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Separator />

            <div>
              <p className="font-medium mb-2">Description</p>
              <p className="text-sm text-muted-foreground">{report.description}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Location</CardTitle>
            <CardDescription>Map view of the reported issue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md overflow-hidden">
              <ReportMapView latitude={report.location.coordinates[1]} longitude={report.location.coordinates[0]} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Media</CardTitle>
            <CardDescription>Images and videos of the issue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="images">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="images">Images ({report.images.length})</TabsTrigger>
                <TabsTrigger value="videos">Videos ({report.videos.length})</TabsTrigger>
              </TabsList>
              <TabsContent value="images" className="mt-4">
                {report.images.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">No images available</p>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {report.images.map((image, index) => (
                      <div key={index} className="relative aspect-square overflow-hidden rounded-md bg-muted">
                        <img
                          src={image || "/placeholder.svg?height=200&width=200"}
                          alt={`Report image ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
              <TabsContent value="videos" className="mt-4">
                {report.videos.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">No videos available</p>
                ) : (
                  <div className="space-y-2">
                    {report.videos.map((video, index) => (
                      <div key={index} className="relative aspect-video overflow-hidden rounded-md bg-muted">
                        <video src={video} controls className="w-full h-full" />
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Update Status</CardTitle>
            <CardDescription>Change the current status of this report</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Current Status</p>
              <ReportStatusBadge status={report.status} />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">New Status</p>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

        
          </CardContent>
          <CardFooter>
            <Button onClick={handleStatusUpdate} disabled={status === report.status || isLoading} className="w-full">
              {isLoading ? "Updating..." : "Update Status"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
