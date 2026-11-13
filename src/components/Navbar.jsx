import { Toolbar, AppBar, Box, Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'
export default function Navbar() {

  const token = useAuthStore((state) => state.token);

  const logout = useAuthStore((state) => state.logout);

  return (
    <AppBar position="static">

      <Toolbar>
        <Box sx={{flexGrow:1}}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          {token ?
            <Button color="inherit" onClick={logout}>Logout</Button>
             : 
            <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>  
            </>
          }
        </Box>
      </Toolbar>

    </AppBar>
  )
}
