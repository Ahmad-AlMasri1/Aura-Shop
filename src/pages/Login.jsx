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
import { loginSchema } from '../validations/authSchema'
export default function Login() {
  const navigate = useNavigate();
  
    const [serverError, setServerError] = React.useState(null)
    const [success,setSuccess] = React.useState(null)
  
    const { register, handleSubmit, formState: {errors, isSubmitting}} = useForm(
      {
        resolver:yupResolver(loginSchema),mode:'onBlur'
      }
    )
  
    const onSubmit = async (data) => {
      try {
        const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', data)
        setSuccess('Login successful!')
        setServerError(null)
        navigate('/home')
  
      } catch (error) {
        setServerError('Login failed. Please try again.')
        setSuccess(null)
      }
    }
    return (
      <Container>
        <Box>
          <Typography component="h1" variant="h4">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField label="Email" fullWidth margin="normal" {...register('email')} error={!!errors.email} helperText={errors.email?.message}></TextField>
            <TextField label="Password" fullWidth margin="normal" {...register('password')} error={!!errors.password} helperText={errors.password?.message}></TextField>
  
            {serverError && <Typography color="error">{serverError}</Typography>}
            {success && <Typography color="success">{success}</Typography>}
            <Button variant="contained" type="submit" fullWidth margin="normal" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
  
            <Link to="/register">
              You don't have an account?
            </Link>
          </Box>
        </Box>
  
      </Container>
    )
}
