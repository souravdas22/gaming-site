import { Avatar } from '@mui/material';
import React from 'react'

export default function ReviewCard({image}) {
  return (
    <div className="w-[28rem] h-[20rem] bg-[#252629] p-8 rounded-2xl text-[#FFFFFF] flex flex-col gap-5 justify-center m-4">
      <p>⭐⭐⭐⭐⭐</p>
      <p className="text-xl">
        "As a new server owner, I was worried about setup and configuration, but
        Playhost made it a breeze. They have detailed tutorials and helpful
        support, which made the process smooth."
      </p>
      <div className="flex items-center gap-3">
        <Avatar
          alt="Remy Sharp"
          src={image}
          sx={{ width: 56, height: 56 }}
        />
        <h5 className="text-xl"> Robert L.</h5>
      </div>
    </div>
  );
}
