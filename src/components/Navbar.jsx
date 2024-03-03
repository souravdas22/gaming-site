import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
import { Hinge } from 'react-awesome-reveal';
import { Fade } from 'react-reveal';
export default function Navbar() {
  return (
    <div className="navbar fixed">
      <nav className=" mx-auto flex justify-between items-center sticky h-[90px]">
        <div className="logo">
          <img
            src="/images/logo.png"
            alt="logo"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "35px",
              cursor: "pointer",
            }}
          />
        </div>
        <Fade duration={3000}>
          <div className="nav-items-div">
            <ul className="nav-items flex gap-12 font-bold">
              <Link to="/home">
                <li>Home</li>
              </Link>
              <li className="uppercase">creators</li>
              <li className="uppercase">Stores</li>
              <li className="uppercase">Services</li>
              <li className="uppercase">Contact</li>
            </ul>
          </div>
        </Fade>
        <div>
          <Hinge duration={5000}>
            <button className="text-white border-[#5623d8] border-2 px-5 py-2 rounded-lg uppercase">
              Get Hosting
            </button>
          </Hinge>
        </div>
      </nav>
    </div>
  );
}
