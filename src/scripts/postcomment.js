import React from 'react'
import Button from '@mui/material/Button'  
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';


const Postcomment = () => {

 let navigate = useNavigate();
 const handleSubmit =  async (event) => {
     event.preventDefault()
     const data = new FormData(event.currentTarget);
     const response = await axios.post(
       "https://commute-api-server.herokuapp.com/discussions/comment",
       {
         message: data.get("message"),
     
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
      comment
    </Typography>
      <TextField
     margin="normal"
     required
     fullWidth
     id="message"
     label="message"
     name="text"
     autoComplete="text"
     autoFocus
     
   />
  
   
   <Button
     type="submit"
     fullWidth
     variant="contained"
     sx={{ mt: 3, mb: 2 }}
   >
    send
   </Button>
  
   
   
 </Box>
 </div>
  )
}

export default Postcomment;

