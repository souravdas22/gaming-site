import React from 'react'

export default function FilledButton({text}) {
  return (
    <button className="text-white bg-[#5623d8] border-none border-2 px-5 py-2 my-5 rounded-lg uppercase font-bold">
      {text}
    </button>
  );
}
