import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface AnalyticsData {
  totalReports: number
  activeReports: number
  averageResolutionTime: number
  completionRate: number
  reportTrends: {
    date: string
    total: number
    pending: number
    inProgress: number
    completed: number
    rejected: number
  }[]
  issueTypeDistribution: {
    name: string
    value: number
  }[]
  severityDistribution: {
    name: string
    value: number
  }[]
  statusDistribution: {
    name: string
    value: number
    color: string
  }[]
  resolutionTimes: {
    issueType: string
    averageDays: number
  }[]
  geographicDistribution: {
    latitude: number
    longitude: number
    count: number
    issueType: string
  }[]
}

interface AnalyticsParams {
  startDate: string
  endDate: string
}

export const analyticsApi = createApi({
  reducerPath: "analyticsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAnalyticsData: builder.query<AnalyticsData, AnalyticsParams>({
      query: (params) => `/pothole/analytics?startDate=${params.startDate}&endDate=${params.endDate}`,
      transformResponse: (response: { data: AnalyticsData }) => {
        // In a real implementation, this would transform the API response
        // For now, we'll return mock data
        // return getMockAnalyticsData()
        return response.data
      },
    }),
  }),
})

// Mock data generator for demonstration
function getMockAnalyticsData(): AnalyticsData {
  // Generate dates for the last 30 days
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (29 - i))
    return date.toISOString().split("T")[0]
  })

  // Generate random report trends
  const reportTrends = dates.map((date) => {
    const pending = Math.floor(Math.random() * 10) + 5
    const inProgress = Math.floor(Math.random() * 8) + 3
    const completed = Math.floor(Math.random() * 15) + 10
    const rejected = Math.floor(Math.random() * 5)
    const total = pending + inProgress + completed + rejected

    return {
      date,
      total,
      pending,
      inProgress,
      completed,
      rejected,
    }
  })

  // Calculate totals
  const totalReports = reportTrends.reduce((sum, day) => sum + day.total, 0)
  const totalCompleted = reportTrends.reduce((sum, day) => sum + day.completed, 0)
  const totalPending = reportTrends.reduce((sum, day) => sum + day.pending, 0)
  const totalInProgress = reportTrends.reduce((sum, day) => sum + day.inProgress, 0)
  const totalRejected = reportTrends.reduce((sum, day) => sum + day.rejected, 0)

  return {
    totalReports,
    activeReports: totalPending + totalInProgress,
    averageResolutionTime: Math.floor(Math.random() * 10) + 3,
    completionRate: Math.round((totalCompleted / totalReports) * 100),
    reportTrends,
    issueTypeDistribution: [
      { name: "Pothole", value: Math.floor(Math.random() * 100) + 50 },
      { name: "Manhole", value: Math.floor(Math.random() * 50) + 20 },
      { name: "Road Crack", value: Math.floor(Math.random() * 80) + 30 },
      { name: "Water Leakage", value: Math.floor(Math.random() * 40) + 10 },
    ],
    severityDistribution: [
      { name: "Mild", value: Math.floor(Math.random() * 100) + 50 },
      { name: "Moderate", value: Math.floor(Math.random() * 80) + 40 },
      { name: "Severe", value: Math.floor(Math.random() * 60) + 20 },
    ],
    statusDistribution: [
      { name: "Pending", value: totalPending, color: "amber" },
      { name: "In Progress", value: totalInProgress, color: "blue" },
      { name: "Completed", value: totalCompleted, color: "green" },
      { name: "Rejected", value: totalRejected, color: "red" },
    ],
    resolutionTimes: [
      { issueType: "Pothole", averageDays: Math.floor(Math.random() * 10) + 2 },
      { issueType: "Manhole", averageDays: Math.floor(Math.random() * 15) + 5 },
      { issueType: "Road Crack", averageDays: Math.floor(Math.random() * 12) + 3 },
      { issueType: "Water Leakage", averageDays: Math.floor(Math.random() * 8) + 1 },
    ],
    geographicDistribution: Array.from({ length: 50 }, () => ({
      latitude: 28.6139 + (Math.random() * 0.2 - 0.1),
      longitude: 77.209 + (Math.random() * 0.2 - 0.1),
      count: Math.floor(Math.random() * 20) + 1,
      issueType: ["Pothole", "Manhole", "Road Crack", "Water Leakage"][Math.floor(Math.random() * 4)],
    })),
  }
}

export const { useGetAnalyticsDataQuery } = analyticsApi
