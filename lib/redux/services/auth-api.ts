import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface User {
  _id: string
  name: string
  email: string
  role: string
  profileImage?: string
}

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  data: {
    accessToken: string
    refreshToken: string
    user: User
  }
  success: boolean
  message: string
  statusCode: number
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: LoginResponse) => {
        // Store tokens in localStorage
        if (response.success && response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken)
          localStorage.setItem("refreshToken", response.data.refreshToken)
          localStorage.setItem("user", JSON.stringify(response.data.user))
        }
        return response
      },
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled
          // Clear local storage on successful logout
          localStorage.removeItem("token")
          localStorage.removeItem("refreshToken")
          localStorage.removeItem("user")
        } catch {
          // If the server request fails, still clear local storage
          localStorage.removeItem("token")
          localStorage.removeItem("refreshToken")
          localStorage.removeItem("user")
        }
      },
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation } = authApi
