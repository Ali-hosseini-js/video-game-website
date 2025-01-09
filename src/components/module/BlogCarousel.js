"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { blogCarousel } from "@/data/blogCarousel";
import { useState } from "react";
import Image from "next/image";
import Tag from "@/module/Tag";
import Button from "@/module/Button";

function BlogCarousel() {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? blogCarousel.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === blogCarousel.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative w-[600px] h-[800px]">
      {/* Main Image Carousel */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(${curr * 100}%)` }}
      >
        {blogCarousel.map((i) => (
          <div key={i.id} className="flex-none w-full">
            <Image
              className="w-full h-[800px] object-cover"
              alt=""
              src={i.image}
              width={600}
              height={800}
            />
          </div>
        ))}
      </div>

      {/* Content Carousel */}
      <div className="absolute inset-0 flex items-end justify-center py-5">
        <div className="overflow-hidden w-[600px] h-[300px] rounded-3xl backdrop-blur-sm ">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(${curr * 100}%)` }}
          >
            {blogCarousel.map((i) => (
              <div key={i.id} className="flex-none w-full">
                <div className="flex flex-col gap-5 p-4">
                  <div className="flex gap-3">
                    {i.tag.map((j, index) => (
                      <Tag key={index} text={j} />
                    ))}
                  </div>
                  <h1 className="text-[34px] font-semibold">{i.title}</h1>
                  <p className="text-[20px] font-light w-[466px]">
                    {i.description}
                  </p>
                  <div>
                    <Button text="مشاهده مقاله" link={i.link} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute flex gap-5 top-14 left-10 transform -translate-y-1/2">
        <button
          onClick={prev}
          className="p-1 rounded-full bg-white text-black"
          aria-label="Previous"
        >
          <IoIosArrowForward size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full bg-white text-black"
          aria-label="Next"
        >
          <IoIosArrowBack size={40} />
        </button>
      </div>
    </div>
  );
}

export default BlogCarousel;
