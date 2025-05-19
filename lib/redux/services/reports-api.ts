import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import Cookies from "js-cookie"
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
  reportedBy: {
    _id: string
    name: string
    email: string
  }
  createdAt: string
  updatedAt: string
}





interface StatsResponse {
  data: {
    totalReports: number
    pendingReports: number
    inProgressReports: number
    completedReports: number
    rejectedReports: number
  }
  success: boolean
  message: string
  statusCode: number
}

interface GetReportsParams {
  page?: number
  limit?: number
  issue?: string
  severityLevel?: string
  status?: string
  searchTerm?: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

interface UpdateStatusParams {
  id: string
  status: string
  comment?: string
}

export const reportsApi = createApi({
  reducerPath: "reportsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      // Get token from localStorage or wherever you store it
      const token = Cookies.get("token")
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ["Reports", "Report", "Stats"],
  endpoints: (builder) => ({
    getReports: builder.query<{ reports: Report[]; totalCount: number }, GetReportsParams>({
      query: (params) => {
        const queryParams = new URLSearchParams()

        if (params.page) queryParams.append("page", params.page.toString())
        if (params.limit) queryParams.append("limit", params.limit.toString())
        if (params.issue) queryParams.append("issue", params.issue)
        if (params.severityLevel) queryParams.append("severityLevel", params.severityLevel)
        if (params.status) queryParams.append("status", params.status)
        if (params.searchTerm) queryParams.append("searchTerm", params.searchTerm)
        if (params.sortBy) queryParams.append("sortBy", params.sortBy)
        if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder)

        return {
          url: `/pothole?${queryParams.toString()}`,
        }
      },
      providesTags: ["Reports"],
      transformResponse: (response: any) => {
        console.log({
          reports: response.data,
          totalCount: response?.meta?.total || 0,
        });
        return {
          reports: response.data,
          totalCount: response.meta?.total || 0,
        }
      },
    }),

    getReportById: builder.query<Report, string>({
      query: (id) => `/pothole/${id}`,
      providesTags: (result, error, id) => [{ type: "Report", id }],
      transformResponse: (response: any) => response.data,
    }),

    getStats: builder.query<
      {
        totalReports: number
        pendingReports: number
        inProgressReports: number
        completedReports: number
        rejectedReports: number
      },
      void
    >({
      query: () => "/pothole/stats",
      providesTags: ["Stats"],
      transformResponse: (response: StatsResponse) => response.data,
    }),

    updateReportStatus: builder.mutation<void, UpdateStatusParams>({
      query: ({ id, status, comment }) => ({
        url: `/pothole/${id}/status`,
        method: "PATCH",
        body: { status, comment },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Report", id }, "Reports", "Stats"],
    }),

    getNearbyReports: builder.query<Report[], { latitude: number; longitude: number; radius?: number }>({
      query: ({ latitude, longitude, radius = 5 }) =>
        `/pothole/nearby?latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
      transformResponse: (response: { data: { reports: Report[] } }) => response.data.reports,
    }),

    getMyReports: builder.query<Report[], void>({
      query: () => "/pothole/my-reports",
      transformResponse: (response: { data: { reports: Report[] } }) => response.data.reports,
    }),
  }),
})

export const {
  useGetReportsQuery,
  useGetReportByIdQuery,
  useGetStatsQuery,
  useUpdateReportStatusMutation,
  useGetNearbyReportsQuery,
  useGetMyReportsQuery,
} = reportsApi
