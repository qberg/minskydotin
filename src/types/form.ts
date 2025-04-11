export interface FormValues {
  fullName: string
  email: string
  phone?: string
  message?: string
}

export interface ActionResponse {
  success: boolean
  message: string
  errors?: {
    fullname?: string[]
    profession?: string[]
    city?: string[]
    state?: string[]
    email?: string[]
    phone?: string[]
    message?: string[]
  }
  data?: FormValues
}

export interface EmailTemplateProps {
  fullName: string
  email: string
  phone?: string
  message?: string
}
