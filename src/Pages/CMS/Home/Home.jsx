import React, { useEffect, useState } from "react";
import "../../../App.css";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../../components/Navbar";
import SwipeableTextMobileStepper from "../../../components/Carousel";
import Slider from "react-slick";
import banner from "../../../Carousel-images/avatar.webp";
import OutlineButton from "../../../components/OutlineButton";
import FilledButton from "../../../components/FilledButton";
import Card from "../../../components/Card";
import image1 from "../../../Carousel-images/card/1.webp";
import image2 from "../../../Carousel-images/card/2.webp";
import image3 from "../../../Carousel-images/card/3.webp";
import Footer from "../../Layout/Footer/Footer";
import { Triangle } from "react-loader-spinner";
import { Bounce, Fade, Slide, Zoom } from "react-reveal";
import { JackInTheBox } from "react-awesome-reveal";
import { Parallax } from "react-parallax";
import community from "../../../Carousel-images/community-bg.webp";
import cardBg from "../../../Carousel-images/card-bg.webp";
import ReviewCard from "../../../components/Review";
import Accordion from "../../../components/Accordian";
// import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <>
      {loading ? (
        <div className="h-screen bg-[#1e1f22]">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Triangle
              visible={true}
              height="80"
              width="80"
              color="#5623d8"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      ) : (
        <div>
          <section className="hero-section" style={{ overflow: "hidden" }}>
            <SwipeableTextMobileStepper />
            <Navbar />
            <div className="w-[1380px] mx-auto hero-title-div">
              <div>
                <Fade left duration={2000}>
                  <h1 className="hero-title text-7xl font-extrabold text-[#FFFFFF]">
                    Galactic odyssey
                  </h1>
                  <p className="hero-description my-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque in veritatis adipisci sit nesciunt eius, expedita sint
                    temporibus unde asperiores!
                  </p>
                  <p className="hero-description text-xl mt-4 mb-3">
                    Starting at
                  </p>
                  <h1 className="hero-title text-6xl font-semibold text-[#FFFFFF]">
                    <span className="text-xl text-[#6a79fa]">$</span> 9.99{" "}
                    <span className="text-xl text-[#6a79fa] ">/monthly</span>
                  </h1>
                </Fade>
                <Bounce left duration={2000}>
                  <FilledButton text={"order your game server now"} />
                </Bounce>
              </div>
            </div>
          </section>
          <section className="section-2 flex items-center">
            <div className="banner w-[1380px] mx-auto flex justify-between items-center mt-6 py-5">
              <Slide left duration={2000}>
                <div className="">
                  <OutlineButton text={"Incredibly Features"} />
                  <h1 className="text-[#FFFFFF] text-[3.2rem] py-2 font-bold">
                    Premium Game Server
                  </h1>
                  <OutlineButton text={"Start your game"} />
                  <h1 className="text-[#FFFFFF] text-6xl font-bold py-3">
                    Unlock your Gaming <br />
                    full potential
                  </h1>
                  <p className="hero-description my-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias quos neque quod sunt. Ipsam numquam eveniet non quae
                    veniam possimus perspiciatis repudiandae accusantium harum
                    animi nam, et cupiditate minus autem!
                  </p>
                  <FilledButton text={"order your game server now"} />
                </div>
              </Slide>
              <Slide right duration={2000}>
                <div>
                  <img
                    src={banner}
                    alt="banner img"
                    style={{ height: "auto", width: "500px" }}
                  />
                </div>
              </Slide>
            </div>
          </section>
          <section className="section-3">
            <Parallax
              strength={800}
              bgImage={cardBg}
              renderLayer={(percentage) => (
                <div>
                  {/* Overlay layer */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                  ></div>
                </div>
              )}
            >
              <Zoom duration={2000}>
                <div className="card-head w-[1380px] mx-auto mt-10">
                  <div className="card-title-div">
                    {" "}
                    <OutlineButton text={"Most complete"} />
                    <h1 className="text-[#FFFFFF] text-[3.2rem] pb-3 font-bold">
                      Game Collection
                    </h1>
                  </div>
                  <div className="card-items flex justify-between items-center">
                    <Card image={image1} text={" Thunder and City"} />
                    <Card image={image2} text={" Mystic Racing 2"} />
                    <Card image={image3} text={" Silent Wrath"} />
                  </div>
                </div>
              </Zoom>
            </Parallax>
          </section>
          <section className="section-4 ">
            <div className="banner-2 flex justify-center items-center w-[1380px] mx-auto gap-6 h-[95vh]">
              <Slide left duration={2000}>
                <div>
                  <img
                    src="/images/server.webp"
                    alt="banner img"
                    style={{ height: "500px", width: "600px" }}
                  />
                </div>
              </Slide>
              <div>
                <OutlineButton text={"Server locations"} />
                <Fade duration={2000}>
                  {" "}
                  <h1 className="text-[#FFFFFF] text-[3.2rem] py-2 w-[40rem] font-bold">
                    <span className="text-[#6a79fa] text-7xl">25</span> servers
                    available <br /> worldwide for your game.
                  </h1>
                </Fade>
                <p className="hero-description my-4 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium fugiat dolorem ratione quo esse numquam
                  blanditiis, aliquam odio soluta beatae. Natus delectus
                  laudantium dicta ducimus aliquam non, quo, quasi possimus,
                  enim accusamus sunt. Aliquid fugit quos distinctio possimus
                  error. Labore.
                </p>
                <div className="flex gap-2 flex-wrap w-[40rem]">
                  <OutlineButton text={"London, England"} />
                  <OutlineButton text={"Paris, France"} />
                  <OutlineButton text={"Frankut, Germany"} />
                  <OutlineButton text={"Helsinki, Finland"} />
                  <OutlineButton text={"Amsterdam, Netherlands"} />
                  <OutlineButton text={"Los Angeles, USA"} />
                </div>
              </div>
            </div>
          </section>

          {/* -----------accordian div--------------- */}
          <section className="h-[90vh]  bg-[#1e1f22] flex justify-center flex-col">
            <div className="w-[1380px] mx-auto questions-div">
              <OutlineButton text={"Do you have"} />
              <h1 className="text-start text-6xl font-bold mb-8 text-white py-4 font-[Oxanium]">
                Any questions?
              </h1>
              <div className="flex gap-5">
                <Fade left duration={2000}>
                  <Accordion />
                </Fade>
                <Fade right duration={2000}>
                  <Accordion />
                </Fade>
              </div>
            </div>
          </section>
          <section className="section-6 h-[70vh]">
            <Parallax
              strength={600}
              bgImage={community}
              blur={{ min: -5, max: 5 }}
            >
              <div className="w-[1380px] mx-auto community-div">
                <div className="community-inner-div ">
                  <JackInTheBox left duration={1000}>
                    <h1 className="text-5xl font-bold text-white text-center uppercase font-sans py-4">
                      Join The{" "}
                      <span className="text-[#5623d8] uppercase font-bold">
                        Community
                      </span>
                    </h1>
                  </JackInTheBox>
                  <p className="py-6 w-[40rem] text-white text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus maxime iure deserunt accusamus enim cupiditate
                    placeat eaque corrupti, aspernatur quae iste autem
                    laboriosam magni! Reiciendis!
                  </p>
                  <Fade bottom duration={2000}>
                    <div className="flex justify-center">
                      {" "}
                      <FilledButton text={"Join discord"} />
                    </div>
                  </Fade>
                </div>
              </div>
            </Parallax>
          </section>

          <section className="section-7 h-[90vh] flex justify-start flex-col">
            <div className="slider-container w-[100%] mx-auto my-20 overflow-hidden">
              <div className="w-[1380px] mx-auto">
                <OutlineButton text={"Customer reviews"} />
                <h1 className="text-[#FFFFFF] text-[4rem] pb-3 font-bold">
                  4.85 out of 5
                </h1>
              </div>
              <div className="slider">
                <Slider {...settings}>
                  <ReviewCard image={"images/review/team1.jpg"} />
                  <ReviewCard image={"images/review/team2.jpg"} />
                  <ReviewCard image={"images/review/team3.jpg"} />
                  <ReviewCard image={"images/review/team4.jpg"} />
                  <ReviewCard image={"images/review/team5.jpg"} />
                  <ReviewCard image={"images/review/team6.jpg"} />
                  <ReviewCard image={"images/review/team7.jpg"} />
                  <ReviewCard image={"images/review/team8.jpg"} />
                </Slider>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
}
