import { useState } from "react";
import { TextField, Button, Typography, Paper, Container } from "@mui/material";
import "./LoginPage.scss";

function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <Paper elevation={3} className="login-paper">
        <Typography className="login-title" gutterBottom>
          {isSignup ? "Sign Up" : "Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <TextField
              name="fullName"
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.fullName}
              onChange={handleChange}
            />
          )}
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="login-button"
            sx={{ mt: 2 }}
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </form>
        <Typography
          color="primary"
          className="login-text"
          sx={{ marginTop: 2, cursor: "pointer" }}
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </Typography>
      </Paper>
    </Container>
  );
}

export default LoginPage;
