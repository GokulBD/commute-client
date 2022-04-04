import React from 'react'
import Button from '@mui/material/Button'  
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import  {BrowserRouter as Router,Link } from "react-router-dom";
import "../styles/loginPage.css"
// import SignUp from './signup';


export default function LoginPage  () {
  let navigate = useNavigate();
    const handleSubmit =  async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const response = await axios.post(
          "https://commute-api-server.herokuapp.com/user/login",
          {
            username: data.get("email"),
            password: data.get("password")
          }
        );
        console.log(response);
        if (response.status === 200) {
          alert("login successful. ");
          navigate("/", { replace: true });
        }
    }


    return(
        
      <div className='form'>

           
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0.5 }}>
            <Typography component="h1" variant="h5">
            Sign in
           </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              login 
            </Button>
           
              <Grid item>
                
                  <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
            
               
              </Grid>
            
          </Box>
          </div>
        
    )
}