import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import Cookies from "js-cookie"

export const reportVerificationApi = createApi({
  reducerPath: "reportVerificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token")
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ["Reports", "Report", "Stats", "Verification"],
  endpoints: (builder) => ({
    getReportVerification: builder.query({
      query: (id) => {
      
        return {
          url: `/pothole-verification/${id}`,
        }
      },
      providesTags: ["Verification"],
           
    }),

 
  }),
})

export const {
  useGetReportVerificationQuery
 
} = reportVerificationApi
