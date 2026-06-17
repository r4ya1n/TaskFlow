export interface User {
  id: number
  email: string
  username: string
  first_name: string
  last_name: string
  isVerified?: boolean
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