import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  VisibilityOff,
  Visibility,
  Person2,
  ThumbUpSharp,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginQuery } from "state/api";

const Login = () => {
  const theme = useTheme();
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [body, setBody] = useState({ username: "", password: "" });

  const login = () => {
    Navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => setShowPrompt(false)}
    >
      <Box
        width="30%"
        gap="20px"
        position="absolute"
        sx={{
          backgroundColor: theme.palette.background.alt,
          borderRadius: "10px",
          display: showPrompt ? "flex" : "none",
          flexDirection: "column",
          p: "20px",
          zIndex: 100,
        }}
      >
        <Box display="flex" flexDirection="column" gap="10px">
          <Typography
            variant="h3"
            color={theme.palette.secondary.main}
            fontWeight="bold"
          >
            To login use
          </Typography>
          <Typography>Username: Ore</Typography>
          <Typography>Password: password</Typography>
        </Box>
        <Box width="100%" sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            backgroundColor={theme.palette.background.alt}
            onClick={() => setShowPrompt(false)}
            sx={{ p: "5px", fontSize: "12px", letterSpacing: "1px" }}
            endIcon={<ThumbUpSharp sx={{ paddingRight: "5px" }} />}
          >
            Got it!
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: "50px",
          borderRadius: "5px",
          backgroundColor: theme.palette.background.alt,
          width: "35%",
          display: "flex",
          flexDirection: "column",
          opacity: showPrompt ? "15%" : "100%",
          transition: "ease-in-out 0.3s",
        }}
        gap="60px"
      >
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-username">Username</InputLabel>
          <Input
            required
            id="standard-username"
            onChange={(e) =>
              setBody((body) => ({ ...body, username: e.target.value }))
            }
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <Person2 />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            required
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(e) =>
              setBody((body) => ({ ...body, password: e.target.value }))
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant="contained"
          backgroundColor={theme.palette.background.alt}
          //   onClick={login}
          sx={{ p: "8px", fontSize: "16px", letterSpacing: "1px" }}
          onClick={login}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
