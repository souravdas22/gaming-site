import React from 'react';
import "./footer.css";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaDiscord,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="footer p-6">
        <div className=" h-[50vh] w-[1380px] mx-auto flex justify-between items-center">
          <div>
            <img src="/images/logo.png" alt="" />
            <p className="hero-description w-[30rem] text-justify text-xl my-5">
              {" "}
              Lorem ipsum culpa tempor tempor eu laboris adipisicing sunt
              excepteur enim laborum officia eiusmod laborum sint do aliqua
              incididunt est aute deserunt in elit non sed ut velit ullamco
              aliquip. Nulla cupidatat elit amet sed labore ut et consequat
              nostrud laboris aliqua ex est fugiat quis aliqua duis quis esse
              dolor laboris non duis sunt.
            </p>
          </div>
          <div>
            <h2 className="text-[#FFFFFF] text-2xl font-bold">Game Server</h2>
            <ul className="footer-items">
              <li>Thunder and City</li>
              <li>Mystic Racing Z</li>
              <li>Silent Wrath</li>
              <li>Funk Dungeon</li>
              <li>Galactic Oddsey</li>
              <li>Warfare Legend</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#FFFFFF] text-2xl font-bold ">Pages</h2>
            <ul className="footer-items">
              <li>Game Server</li>
              <li>Knowledgebase</li>
              <li>About Us</li>
              <li>Affliates</li>
              <li>Locations</li>
              <li>News</li>
            </ul>
          </div>
          <div className="w-[22rem] flex flex-col gap-6">
            <h2 className="text-[#FFFFFF] text-2xl font-bold">Newsletter</h2>
            <div
              className="w-full flex items-center input"
              style={{ maxWidth: "22rem" }}
            >
              <input
                type="text"
                placeholder="enter your email"
                className="w-full px-4 py-2 rounded-l-3xl border border-gray-300 focus:outline-none"
              />
              <button className="bg-[#5623d8] py-[13px] px-10 rounded-r-3xl text-white">
                <FaArrowRightLong />
              </button>
            </div>
            <p className="footer-text">
              Your email is safe with us. We don’t spam.
            </p>
            <h2 className="text-[#FFFFFF] text-2xl font-bold">Follow Us on</h2>
            <div className="social-icons flex gap-4">
              <button className="bg-[#FFFFFF1A] p-2 rounded-lg">
                <FaFacebookF className="text-2xl text-[#6a79fa]" />
              </button>
              <button className="bg-[#FFFFFF1A] p-2 rounded-lg">
                <FaTwitter className="text-2xl text-[#6a79fa]" />
              </button>
              <button className="bg-[#FFFFFF1A] p-2 rounded-lg">
                <FaDiscord className="text-2xl text-[#6a79fa]" />
              </button>
              <button className="bg-[#FFFFFF1A] p-2 rounded-lg">
                <FaTiktok className="text-2xl text-[#6a79fa]" />
              </button>
              <button className="bg-[#FFFFFF1A] p-2 rounded-lg">
                <FaYoutube className="text-2xl text-[#6a79fa]" />
              </button>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="flex justify-between w-[1380px] mx-auto pt-4">
          <p className="footer-text text-lg">
            Copy@ 2024. All rights reserved by
            <span className="copy text-xl font-Oxanium"> Sourav</span>
          </p>
          <p className="footer-text text-lg">
            Terms & Conditions Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}
