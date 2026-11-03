import React from 'react'
import * as yup from "yup"
export const registerSchema = yup.object({
    userName:yup.string().required("User name is required").min(3, "User name must be at least 3 characters").max(20, "User name cannot exceed 20 characters"),
    email:yup.string().required("Email is required").email("Please enter a valid email address"),
    password:yup.string().required("Password is required").min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
    fullName:yup.string().required("Full name is required"),
    phoneNumber:yup.string().required("Phone number is required").matches(
      /^\+?[1-9]\d{1,14}$/,
      'Please enter a valid phone number (e.g., +1234567890)'
    ),
})

export const loginSchema = yup.object({
  email:yup.string().required("Email is required").email("Please enter a valid email address"),
  password:yup.string().required("Password is required")
})