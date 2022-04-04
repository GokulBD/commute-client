import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "../styles/loginPage.css";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await axios.post(
      "https://commute-api-server.herokuapp.com/user/signup",
      {
        username: data.get("email"),
        password: data.get("password")
      }
    );
    console.log(response);
    if (response.status === 200) {
      alert("signup successful. Now login");
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="form">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography component="h2" variant="h5">
          Sign up
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
          Register
        </Button>
        <Grid item>
          <Link to="/login" variant="body2">
            {"Already an user? Sign in"}
          </Link>
        </Grid>
      </Box>
    </div>
  );
}
