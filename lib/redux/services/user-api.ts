import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { User } from "@/lib/types"

interface UsersResponse {
  data: {
    users: User[]
    meta: {
      total: number
      page: number
      limit: number
    }
  }
  success: boolean
  message: string
  statusCode: number
}

interface UserResponse {
  data: {
    user: User
  }
  success: boolean
  message: string
  statusCode: number
}

interface GetUsersParams {
  page?: number
  limit?: number
  searchTerm?: string
  role?: string
  status?: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

interface UpdateUserParams extends Partial<User> {
  id: string
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ["Users", "User"],
  endpoints: (builder) => ({
    getUsers: builder.query<{ users: User[]; totalCount: number }, GetUsersParams>({
      query: (params) => {
        const queryParams = new URLSearchParams()

        if (params.page) queryParams.append("page", params.page.toString())
        if (params.limit) queryParams.append("limit", params.limit.toString())
        if (params.searchTerm) queryParams.append("searchTerm", params.searchTerm)
        if (params.role && params.role !== "all") queryParams.append("role", params.role)
        if (params.status && params.status !== "all") queryParams.append("status", params.status)
        if (params.sortBy) queryParams.append("sortBy", params.sortBy)
        if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder)

        return {
          url: `/user?${queryParams.toString()}`,
        }
      },
      providesTags: ["Users"],
      transformResponse: (response:any) => {
        return {
          users: response.data,
          totalCount: response.meta.total,
        }
      },
    }),

    getUserById: builder.query<User, string>({
      query: (id) => `/user/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
      transformResponse: (response: any) => response.data,
    }),

    updateUser: builder.mutation<User, UpdateUserParams>({
      query: ({ id, ...patch }) => ({
        url: `/user/${id}/role`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }, "Users"],
      transformResponse: (response: any) => response.data,
    }),

    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
})

export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserMutation, useDeleteUserMutation } = usersApi
