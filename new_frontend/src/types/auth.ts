export interface User {
  id: number
  email: string
  username: string
  firstName: string
  lastName: string
  isVerified: boolean
}

export interface ApiResponse {
  success: boolean
  message: string
  errors?: ValidationError[]
}

export interface ValidationError {
  field: string
  message: string
}