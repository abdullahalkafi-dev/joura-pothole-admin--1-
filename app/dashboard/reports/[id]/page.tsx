"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { ReportDetail } from "@/components/report-detail"
import { Button } from "@/components/ui/button"
import { useGetReportByIdQuery } from "@/lib/redux/services/reports-api"
import { useGetReportVerificationQuery } from "@/lib/redux/services/verification-api"
import { ArrowLeft } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

export default function ReportDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { data: report, isLoading, error } = useGetReportByIdQuery(id)
  const {data: reportVerification} = useGetReportVerificationQuery(id)
  console.log(reportVerification?.data);
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <DashboardHeader title="Report Details" />
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading report details...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-destructive">Error loading report details</p>
        </div>
      ) : report ? (
        <ReportDetail verificationInfo={reportVerification} report={report} />
      ) : null}
    </div>
  )
}
