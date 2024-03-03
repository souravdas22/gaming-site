import React from "react";
import "./signin.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../Layout/Footer/Footer";
import FilledButton from "../../../components/FilledButton";
export default function SignIn() {
  return (
    <div>
      <section className="login">
        <div className="login-div w-[1380px] mx-auto">
          <div className="form-div w-[450px] bg-[#1E1F22] py-[30px] px-[40px] rounded-xl">
            <form action="" className="flex justify-center flex-col gap-2">
              <h2 className="text-2xl font-bold text-white">
                Sign in to your account
              </h2>
              <label htmlFor="email">
                Username or Email
              </label>
              <input type="email"  name="email" id="email" />
              <label htmlFor="password" >
                Password
              </label>
              <input type="password"  name="password" id="password" />
              <div className="flex justify-between">
                <div>
                  <input type="checkbox" />
                  <label htmlFor=""> Remember Me</label>
                </div>
                <span className="text-[#6a79fa] font-[manrope] capitalize font-semibold text-base">Forgot Password?</span>
              </div>
              <FilledButton text={"Log In"} />
            </form>
          </div>
          <Navbar />
        </div>
        <Footer />
      </section>
    </div>
  );
}
