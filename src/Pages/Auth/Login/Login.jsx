import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, Navigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function Login() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    // image: "",
  });
  // console.log(user.image)
  const [error, setError] = React.useState({});
  // console.log(error)
  const validation = () => {
    let error = {};
    if (!user.email) {
      error.email = "Email is required";
    }
    if (!user.password) {
      error.password = "Password is required";
    }
    // if (!user.image) {
    //   error.image = "please insert your image";
    // }
    return error;
  };
    const [toHome, settoHome] = React.useState(false);
    if (toHome === true) {
      return <Navigate to="/" />;
    }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validation());
    const formdata = new FormData();
    formdata.append("email", user.email);
    formdata.append("password", user.password);
    try {
      const response = await axios.post(
        "https://wtsacademy.dedicateddevelopers.us/api/user/signin",
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const token = response.data.token;
      localStorage.setItem("token",token);
      console.log(response.data);
      toast(response.data.message);
       if (response.status === 200) {
         setUser({
           ...user,
           email: "",
           password: "",
         });
           setTimeout(() => {
             settoHome(true);
           }, 2000);
       } else {
         settoHome(false)
      }
    

    } catch (error) {
      console.error(error);
    }
  };
  // const VisuallyHiddenInput = styled("input")({
  //   clip: "rect(0 0 0 0)",
  //   clipPath: "inset(50%)",
  //   height: 1,
  //   overflow: "hidden",
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   whiteSpace: "nowrap",
  //   width: 1,
  // });
  let name, value;
  const userData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" });
        setUser({ ...user, email: value });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "Password is required" });
        setUser({ ...user, password: value });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }
    if (name === "image") {
      const files = e.target.files;
      const fileLength = files ? files.length : 0;
      if (fileLength === 0) {
        setError({ ...error, image: "Please insert your image" });
      } else {
        setError({ ...error, image: "" });
        setUser({ ...user, image: fileLength });
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={8}
          sx={{
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{ display: "flex", height: "400px", justifyContent: "center" }}
          >
            <img src="https://source.unsplash.com/random?wallpapers" alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ToastContainer />
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                name="email"
                label="Email"
                value={user.email}
                onChange={(e) => userData(e)}
                type="email"
                id="email"
              />
              <span style={{ color: "red" }}>{error.email}</span>
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                value={user.password}
                onChange={(e) => userData(e)}
                type="passord"
                id="password"
              />
              <span style={{ color: "red" }}>{error.password}</span>
              {/* <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                fullWidth
              >
                Upload Image
                <VisuallyHiddenInput
                  type="file"
                  name="image"
                  onChange={(e) => userData(e)}
                />
              </Button>
              <span style={{ color: "red" }}>{error.image}</span> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Do not have an account? Sign up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <pre>{JSON.stringify(user)}</pre> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
