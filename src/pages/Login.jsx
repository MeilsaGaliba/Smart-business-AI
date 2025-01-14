import React from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { Footer, Navbar } from '../components'

function Login() {
  const handleLogin = () => {
    // Navigate to the dashboard page regardless of input
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="lg">
        <Navbar />
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField 
          fullWidth 
          label="Email" 
          variant="outlined" 
          margin="normal" 
        />
        <TextField 
          fullWidth 
          label="Password" 
          type="password" 
          variant="outlined" 
          margin="normal" 
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" href = "/dashboard" fullWidth  >
            Login
          </Button>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}

export default Login;
