import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputBase,
  Link,
  Typography
} from "@mui/material";

import cinema from "@/assets/cinema-sm.jpg";
import playIcon from "@/assets/icons/icon-play-circle.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e: any) => {
    e.preventDefault();
    try {
      console.log(`Email : ${email} and Password : ${password}`);
      setEmail("");
      setPassword("");
      navigate("/movies")
    } catch (err) {
      console.log('login error', err)
      navigate("/");
    }
    
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${cinema})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        color: "#FFF",
      }}
    >
      <Box
        p={4}
        mt={8}
        sx={{
          width: "100%",
          background: "rgba(0,0,0,0.75)",
          maxWidth: "380px",
          height: "450px",
          borderRadius: "8px"
        }}
      >
        <Typography variant="h2" mb={1} fontSize="1.75rem" sx={{display: "flex", alignItems: "center"}}>
        <img src={playIcon} alt="logo" width="25px" height="25px" />Show Stream
        </Typography>
        <Typography  mb={2} fontSize="1rem">
          Login to your account
        </Typography>
        <Box component="form" sx={{ color: "#FFF" }} onSubmit={submitHandle}>
          <InputBase
            required
            placeholder="Email address"
            type="email"
            fullWidth
            sx={{
              mb: 2,
              padding: "5px 10px",
              background: "#FFF",
              fontSize: "15px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBase
            required
            placeholder="Password"
            type="password"
            fullWidth
            sx={{
              mb: 1,
              padding: "5px 10px",
              background: "#FFF",
              fontSize: "15px",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
            sx={{ color: "#FFF" }}
          />
          <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">
            Sign In
          </Button>
          <Box>
            <Typography fontWeight={300} mt={2}>
            </Typography>
            <Typography fontWeight={300} mt={2}>
              <Link href="/signup" underline="none" sx={{ color: "#FFF" }}>
                Don't have an account ? Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;