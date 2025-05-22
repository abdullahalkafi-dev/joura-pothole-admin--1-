import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { reportsApi } from "./services/reports-api"
import { authApi } from "./services/auth-api"
import { analyticsApi } from "./services/analytics-api"
import { usersApi } from "./services/user-api"
import { reportVerificationApi } from "./services/verification-api"

export const store = configureStore({
  reducer: {
    [reportsApi.reducerPath]: reportsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [analyticsApi.reducerPath]: analyticsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [reportVerificationApi.reducerPath]: reportVerificationApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reportsApi.middleware, authApi.middleware, analyticsApi.middleware,usersApi.middleware, reportVerificationApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
