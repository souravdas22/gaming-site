import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function Registration() {
  const [user, setUser] = React.useState({
    fname: "",
    lname: "",
    image: "",
  });
console.log(user.image)
  const [error, setError] = React.useState({});
  // console.log(error)
  const validation = () => {
    let error = {};
    if (!user.fname) {
      error.fname = "First Name is required";
    }
    if (!user.lname) {
      error.lname = "Last Name is required";
    }
    if (!user.image) {
      error.image = "please insert your image";
    }
    return error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation());
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  let name, value;
  const userData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "first@name") {
      if (value.length === 0) {
        setError({ ...error, fname: "First Name is required" });
        setUser({ ...user, fname: value });
      } else {
        setError({ ...error, fname: "" });
        setUser({ ...user, fname: value });
      }
    }
    if (name === "last@name") {
      if (value.length === 0) {
        setError({ ...error, lname: "Last Name is required" });
        setUser({ ...user, lname: value });
      } else {
        setError({ ...error, lname: "" });
        setUser({ ...user, lname: value });
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
            // backgroundImage:
            //   "url(https://source.unsplash.com/random?wallpapers)",
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                name="first@name"
                label="First Name"
                value={user.fname}
                onChange={(e) => userData(e)}
                type="text"
                id="first@name"
              />
              <span style={{ color: "red" }}>{error.fname}</span>
              <TextField
                margin="normal"
                fullWidth
                name="last@name"
                label="Last Name"
                value={user.lname}
                onChange={(e) => userData(e)}
                type="text"
                id="last@name"
              />
              <span style={{ color: "red" }}>{error.lname}</span>
              <Button
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
              <span style={{ color: "red" }}>{error.image}</span>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/" variant="body2">
                    {"Already have an account? Sign in"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <pre>{JSON.stringify(user)}</pre>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
