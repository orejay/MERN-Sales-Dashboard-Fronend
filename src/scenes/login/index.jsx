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
  useMediaQuery,
} from "@mui/material";
import {
  VisibilityOff,
  Visibility,
  Person2,
  ThumbUpSharp,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setPrompt } from "state";

const Login = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  //   const [showPrompt, setShowPrompt] = useState(true);
  const showPrompt = useSelector((state) => state.global.prompt);
  const [loginError, setLoginError] = useState(false);
  const [body, setBody] = useState({ username: "", password: "" });
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();

  const login = () => {
    console.log(body);
    fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setUser(data.details));
        data.details.id ? Navigate("/dashboard") : setLoginError(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => dispatch(setPrompt(false))}
    >
      <Box
        width={isNonMobile ? "30%" : "90%"}
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
            onClick={() => dispatch(setPrompt(false))}
            sx={{
              backgroundColor: theme.palette.background.alt,
              p: "5px",
              fontSize: "12px",
              letterSpacing: "1px",
            }}
            endIcon={<ThumbUpSharp sx={{ paddingRight: "5px" }} />}
          >
            Got it!
          </Button>
        </Box>
      </Box>
      <Box
        width={isNonMobile ? "35%" : "92%"}
        sx={{
          p: isNonMobile ? "50px" : "30px",
          borderRadius: "5px",
          backgroundColor: theme.palette.background.alt,
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
          sx={{
            p: isNonMobile ? "8px" : "6px",
            fontSize: isNonMobile ? "16px" : "",
            letterSpacing: "1px",
          }}
          onClick={login}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
