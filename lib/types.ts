export interface User {
    _id: string
    firstName: string
    lastName: string
    email: string
    role: string
    address?: string
    phoneNumber?: string
    image: string
    fcmToken?: string | null
    status: string
    verified: boolean
    authentication: {
      isResetPassword: boolean
      oneTimeCode: string | null
      expireAt: string | null
    }
    passwordChangedAt: string | null
    dateOfBirth: string | null
    createdAt: string
    updatedAt: string
  }
  