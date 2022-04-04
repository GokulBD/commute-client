 import React from 'react'
 import Button from '@mui/material/Button'  
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

 
 const Discussion = () => {

  let navigate = useNavigate();
  const handleSubmit =  async (event) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget);
      const response = await axios.post(
        "https://commute-api-server.herokuapp.com/discussions/",
        {
          username: data.get("username"),
          topic: data.get("topic"),
          description: data.get("description")
        }
      );
  
      if (response.status === 200) {
        alert(" upload successful. ");
        navigate("/", { replace: true });
      }
  }

   return (
    <div className='form'>

           
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0.5 }}>
      <Typography component="h1" variant="h5">
      New discussion
     </Typography>
       <TextField
      margin="normal"
      required
      fullWidth
      id="username"
      label="username"
      name="text"
      autoComplete="text"
      autoFocus
      
    />
    <TextField
      margin="normal"
      required
      fullWidth
      name="topic"
      label="topic"
      type="text"
      id="topic"
    
    />
    <TextField
      margin="normal"
      required
      fullWidth
      name="description"
      label="description"
      type="text"
      id="description"
    
    />
    
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
     Create
    </Button>
   
    
    
  </Box>
  </div>
   )
 }
 
 export default Discussion;

