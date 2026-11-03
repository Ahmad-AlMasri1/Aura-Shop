import React from 'react'
// Design
import { Box, Button, Container, TextField, Typography } from '@mui/material'

// Router
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Hooks
import { useForm } from 'react-hook-form'

// Validation
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../validations/authSchema'


export default function Register() {

  const navigate = useNavigate();

  const [serverError, setServerError] = React.useState(null)
  const [success,setSuccess] = React.useState(null)

  const { register, handleSubmit, formState: {errors, isSubmitting}} = useForm(
    {
      resolver:yupResolver(registerSchema),mode:'onBlur'
    }
  )

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', data)
      setSuccess('Registration successful!')
      setServerError(null)
      navigate('/login')

    } catch (error) {
      setServerError('Registration failed. Please try again.')
      setSuccess(null)
    }
  }
  return (
    <Container>
      <Box>
        <Typography component="h1" variant="h4">
          Create an Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField label="Full Name" fullWidth margin="normal" {...register('fullName')} error={!!errors.fullName} helperText={errors.fullName?.message}></TextField>
          <TextField label="User Name" fullWidth margin="normal" {...register('userName')} error={!!errors.userName} helperText={errors.userName?.message}></TextField>
          <TextField label="Email" fullWidth margin="normal" {...register('email')} error={!!errors.email} helperText={errors.email?.message}></TextField>
          <TextField label="Phone Number" fullWidth margin="normal" {...register('phoneNumber')} error={!!errors.phoneNumber} helperText={errors.phoneNumber?.message}></TextField>
          <TextField label="Password" fullWidth margin="normal" {...register('password')} error={!!errors.password} helperText={errors.password?.message}></TextField>

          {serverError && <Typography color="error">{serverError}</Typography>}
          {success && <Typography color="success">{success}</Typography>}
          <Button variant="contained" type="submit" fullWidth margin="normal" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </Button>

          <Link to="/login">
            Already have an account?
          </Link>
        </Box>
      </Box>

    </Container>
  )
}
