"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineComment } from "react-icons/md";
import { IoIosArrowDropleft } from "react-icons/io";
import { heroCarousel } from "@/data/heroCarousel";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/module/Tag";

function Carousel() {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? heroCarousel.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === heroCarousel.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative w-[1240px] h-[657px]">
      {/* Main Image Carousel */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(${curr * 100}%)` }}
      >
        {heroCarousel.map((i) => (
          <div key={i.id} className="flex-none w-full">
            <Image
              className="w-full h-[540px] object-cover"
              alt=""
              src={i.image}
              width={1240}
              height={540}
            />
          </div>
        ))}
      </div>

      {/* Thumbnails and Navigation Buttons */}
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center justify-center gap-2">
          {heroCarousel.map((_, i) => (
            <Image
              key={_.id}
              className={`transition-all w-[96px] h-[56px] gap-2 ${
                curr === i ? "shadow-3xl" : ""
              }`}
              alt=""
              src={_.image}
              width={96}
              height={56}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between -m-4">
          <button
            onClick={prev}
            className="p-1 rounded-full bg-[#6C5DD3] text-white hover:bg-white hover:text-[#6C5DD3]"
          >
            <IoIosArrowForward size={20} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full bg-[#6C5DD3] text-white hover:bg-white hover:text-[#6C5DD3]"
          >
            <IoIosArrowBack size={20} />
          </button>
        </div>
      </div>

      {/* Content Carousel */}
      <div className="overflow-hidden absolute w-[554px] h-[318px] rounded-3xl backdrop-blur-xl bg-[#00000012] bottom-4 left-4">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(${curr * 100}%)` }}
        >
          {heroCarousel.map((i) => (
            <div key={i.id} className="flex-none w-full">
              <div className="flex flex-col gap-5 p-4">
                {i.tag.map((j, index) => (
                  <Tag key={index} text={j} />
                ))}
                <h1 className="text-[34px] font-semibold">{i.title}</h1>
                <p className="text-[20px] font-normal w-[466px]">
                  {i.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex p-2 gap-3 bg-[#6C5DD3] w-fit rounded-full items-center justify-center">
                    <MdOutlineComment className="bg-white text-[#6C5DD3] p-1 rounded-full size-[26px]" />
                    <p>{i.comment} نظر</p>
                  </div>

                  <Link href={i.link}>
                    <div className="bg-[#6C5DD3] w-[66px] h-[55px] flex items-center justify-center rounded-r-xl rounded-bl-xl">
                      <IoIosArrowDropleft className="text-white size-8" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
