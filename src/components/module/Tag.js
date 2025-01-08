import React from "react";

function Tag({ text }) {
  return (
    <div className="bg-[#FF754C2B]  p-2 rounded-full w-fit">
      <p className="text-mainOrange ">{text}</p>
    </div>
  );
}

export default Tag;
