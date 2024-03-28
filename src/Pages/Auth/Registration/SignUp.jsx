import React from "react";
import "./signup.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../Layout/Footer/Footer";
import FilledButton from "../../../components/FilledButton";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function SignUp() {
  const [user, setUser] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [error, setError] = React.useState({});
  const validation = () => {
    let error = {};
    if (!user.first_name) {
      error.first_name = "First Name is required";
    }
    if (!user.last_name) {
      error.last_name = "Last Name is required";
    }
    if (!user.email) {
      error.email = "Email is required";
    }
    if (!user.password) {
      error.password = "Password is required";
    }
    return error;
  };
  const [toLogin, settoLogin] = React.useState(false);
  if (toLogin === true) {
    return <Navigate to="/signin" />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validation());
    const formdata = new FormData();
    formdata.append("email", user.email);
    formdata.append("password", user.password);
    formdata.append("first_name", user.first_name);
    formdata.append("last_name", user.last_name);
    try {
      const response = await axios.post(
        "https://wtsacademy.dedicateddevelopers.us/api/user/signup",
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data);
      toast(response.data.message);
      if (response.status === 200) {
        setUser({
          ...user,
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
        setTimeout(() => {
          settoLogin(true);
        }, 2000);
      } else {
        settoLogin(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  let name, value;
  const userData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "first@name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "First Name is required" });
        setUser({ ...user, first_name: value });
      } else {
        setError({ ...error, first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }
    if (name === "last@name") {
      if (value.length === 0) {
        setError({ ...error, last_name: "Last Name is required" });
        setUser({ ...user, last_name: value });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }
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
  };
  return (
    <div>
      <section className="login">
        <div className="login-div w-[1380px] mx-auto">
          <ToastContainer />
          <div className="form-div w-[450px] bg-[#1E1F22] py-[15px] px-[40px] rounded-xl">
            <form
              action=""
              className="flex justify-center flex-col gap-2"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-white">
                Sign up to your account
              </h2>
              <label htmlFor="first@name">First Name</label>
              <input
                name="first@name"
                label="First Name"
                value={user.first_name}
                onChange={(e) => userData(e)}
                type="text"
                id="first@name"
              />
              <span style={{ color: "red" }}>{error.first_name}</span>
              <label htmlFor="last@name">Last Name</label>
              <input
                name="last@name"
                label="Last Name"
                value={user.last_name}
                onChange={(e) => userData(e)}
                type="text"
                id="last@name"
              />
              <span style={{ color: "red" }}>{error.last_name}</span>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                label="Email"
                value={user.email}
                onChange={(e) => userData(e)}
                type="email"
                id="email"
              />
              <span style={{ color: "red" }}>{error.email}</span>
              <label htmlFor="password">Password</label>
              <input
                name="password"
                label="Password"
                value={user.password}
                onChange={(e) => userData(e)}
                type="passord"
                id="password"
              />
              <span style={{ color: "red" }}>{error.password}</span>
              <div className="flex justify-between">
                <div>
                  <input type="checkbox" />
                  <label htmlFor=""> Remember Me</label>
                </div>
                <span className="text-[#6a79fa] font-[manrope] capitalize font-semibold text-base cursor-pointer">
                  Forgot Password?
                </span>
              </div>
              <p className="text-white text-end text-base ">
                Already have an account?{" "}
                <Link className="text-[#6a79fa] font-[manrope]" to={"/signin"}>
                  Sign In
                </Link>
              </p>
              <FilledButton text={"Sign Up"} type="submit" />
            </form>
          </div>
          <Navbar />
        </div>
        <Footer />
      </section>
    </div>
  );
}
