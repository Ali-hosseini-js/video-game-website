import Button from "@/module/Button";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import TrailerCard from "@/module/TrailerCard";
import { trailer } from "@/data/trailer";

function Trailer() {
  return (
    <div className="flex flex-col gap-10 py-12">
      <h1 className="text-[28px] font-semibold underline underline-offset-[16px] text-center">
        تریلر بازی ها
      </h1>
      <div className="rounded-2xl bg-[#242731]">
        <video
          className="rounded-2xl"
          width={1240}
          height={490}
          controls
        ></video>

        <div className="p-10 divide-y-2 divide-solid divide-[#F0F3F61A]">
          <div className="flex flex-col gap-5 pb-6">
            <h2 className="text-[40px] font-medium">
              تریلر رسمی بازی Metal Gear Solid Delta: Snake Eater
            </h2>
            <p className="text-[21px] font-normal">
              شایعه ساخت Metal Gear Solid Delta: Snake Eater قوت گرفت. طبق گفته
              ها و نشریات وابسته به استودیو های سازنده این عنوان خاطره انگیز،
              خبر های خوبی از ساخت نسخه ریمیک و یا همان بهبود یافته در راه است.
            </p>
          </div>

          <div className="flex justify-between pt-6">
            <div className="flex gap-5">
              <Link
                className="flex gap-3 text-[17px] font-semibold items-center"
                href="/trailer"
              >
                <CiCirclePlus className="size-[30px]" /> افزودن به لیست علاقه
                مندی ها
              </Link>
              <Link
                className="flex gap-3 text-[17px] font-semibold items-center"
                href="/trailer"
              >
                <RiShareForwardLine className="size-[30px]" /> اشتراک گذاری
              </Link>
              <Link
                className="flex gap-3 text-[17px] font-semibold items-center"
                href="/trailer"
              >
                <AiOutlineLike className="size-[30px]" /> پسندیدم
              </Link>
            </div>
            <Link href="/trailer">
              <BsThreeDots className="bg-[#E4E4E440] rounded-lg p-1 size-[40px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-5 py-10">
        {trailer.map((i) => (
          <TrailerCard key={i.id} data={i} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button text="مشاهده همه" link="/review" />
      </div>
    </div>
  );
}

export default Trailer;
