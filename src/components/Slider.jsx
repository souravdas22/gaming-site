import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          style={{ height: "300px", width: "300px" }}
          src="https://imgs.search.brave.com/JWhv8Jr9bE6fZMEdAKK9jt6ARXvQkkxFxRMAIB4BaOQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/c2hvcGlmeWNsb3Vk/L2hhdGNoZnVsX3dl/Yl90d28vYnVuZGxl/cy83ZTU1ZWIzZDZh/MWEwOTYwNTg5NTVh/ZTdkNjRlZTlkNS5w/bmc"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ height: "300px", width: "300px" }}
          src="https://imgs.search.brave.com/JWhv8Jr9bE6fZMEdAKK9jt6ARXvQkkxFxRMAIB4BaOQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/c2hvcGlmeWNsb3Vk/L2hhdGNoZnVsX3dl/Yl90d28vYnVuZGxl/cy83ZTU1ZWIzZDZh/MWEwOTYwNTg5NTVh/ZTdkNjRlZTlkNS5w/bmc"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ height: "300px", width: "300px" }}
          src="https://imgs.search.brave.com/JWhv8Jr9bE6fZMEdAKK9jt6ARXvQkkxFxRMAIB4BaOQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/c2hvcGlmeWNsb3Vk/L2hhdGNoZnVsX3dl/Yl90d28vYnVuZGxl/cy83ZTU1ZWIzZDZh/MWEwOTYwNTg5NTVh/ZTdkNjRlZTlkNS5w/bmc"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ height: "300px", width: "300px" }}
          src="https://imgs.search.brave.com/JWhv8Jr9bE6fZMEdAKK9jt6ARXvQkkxFxRMAIB4BaOQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/c2hvcGlmeWNsb3Vk/L2hhdGNoZnVsX3dl/Yl90d28vYnVuZGxl/cy83ZTU1ZWIzZDZh/MWEwOTYwNTg5NTVh/ZTdkNjRlZTlkNS5w/bmc"
          alt=""
        />
      </div>
      <div>
        <img
          style={{ height: "300px", width: "300px" }}
          src="https://imgs.search.brave.com/JWhv8Jr9bE6fZMEdAKK9jt6ARXvQkkxFxRMAIB4BaOQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/c2hvcGlmeWNsb3Vk/L2hhdGNoZnVsX3dl/Yl90d28vYnVuZGxl/cy83ZTU1ZWIzZDZh/MWEwOTYwNTg5NTVh/ZTdkNjRlZTlkNS5w/bmc"
          alt=""
        />
      </div>
    </Slider>
  );
}
