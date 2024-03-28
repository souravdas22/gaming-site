import React from 'react'
import "./card.css";
export default function Card({image,text}) {
  return (
    <div>
      <div className="w-[350px] card cursor-pointer">
        <img src={image} alt="cardImg" />
        <div className="card-heading mx-8">
          <h3 className="card-title text-start  text-[#FFFFFF] font-bold text-2xl">
            {text}
          </h3>
          <p className="card-subhead text-start  text-[#ADB7BE] text-xl ">
            Starting at{" "}
            <span className="bg-[#5623d8] text-white font-semibold px-1 rounded-xl">
              $14.99
            </span>
          </p>
          <button className="card-btn text-white bg-[#5623d8] border-none border-2 px-5 py-2 my-5 rounded-lg uppercase font-bold w-full">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
} 
