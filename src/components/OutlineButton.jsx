import React from 'react'

export default function OutlineButton({text}) {
  return (
    <button className="border-[1px] rounded-3xl border-white text-white px-4 py-2 my-2 capitalize">
      {text}
    </button>
  );
}
