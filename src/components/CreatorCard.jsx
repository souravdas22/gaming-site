import React from "react";

export default function CreatorCard({
  image,
  imageBackground,
  name,
  position,
  games,
}) {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "380px",
          height: "350px",
          marginTop: "4rem",
          transition: "transform 0.3s ease",
        }}
        className="hover:scale-110"
      >
        <img
          src={imageBackground}
          alt="img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <div className="flex flex-col items-center ">
            <img
              src={image}
              alt="img"
              className="w-[8rem] h-[8rem] rounded-[4rem] absolute mt-[-3rem] border-2 border-white "
            />
            <div className="absolute bottom-2 text-center  p-3 w-full ">
              <h3 className="text-white font-bold text-xl">{name}</h3>
              <p className="text-[#ADB7BE]">
                <span className="text-lg font-bold capitalize text-white">
                  Position:{" "}
                </span>
                {position}
              </p>
              <p className="text-[#ADB7BE] text-base w-full text-center">
                <span className="text-lg capitalize font-bold text-white ">
                  Games:{" "}
                </span>
                {games}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
