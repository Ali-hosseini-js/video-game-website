import Link from "next/link";
import React from "react";

function Button({ text, link }) {
  return (
    <Link href={`${link}`} className="py-2 px-8 bg-[#6C5DD3] rounded-lg">
      {text}
    </Link>
  );
}

export default Button;
