import Image from "next/image";
import Link from "next/link";
import img from "@/public/image/review3.png";
import img2 from "@/public/image/imgTrailer3.png";
import img3 from "@/public/image/review2.png";
import { FaArrowLeft } from "react-icons/fa";
import enamad from "@/public/image/enamad.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <div className="-mx-[100px] px-[100px] bg-[#33353B]">
      <div className="flex pt-10 justify-between  h-[430px]">
        <div className="flex flex-col gap-5">
          <h3 className="text-[21px] font-semibold pb-5">داغترین مطالب هفته</h3>
          <Link href="/blog" className="flex gap-3">
            <Image
              className="rounded-2xl w-[80px] h-[67px]"
              alt=""
              src={img}
              width={100}
              height={67}
            />
            <p className="text-[15px] font-normal w-[170px]">
              این هفته چه بازی های معرفی می شوند.
            </p>
          </Link>
          <Link href="/blog" className="flex gap-3">
            <Image
              className="rounded-2xl w-[80px] h-[67px]"
              alt=""
              src={img2}
              width={100}
              height={67}
            />
            <p className="text-[15px] font-normal w-[170px]">
              جدیدترین تریلر بازی های جدید
            </p>
          </Link>
          <Link href="/blog" className="flex gap-3">
            <Image
              className="rounded-2xl w-[80px] h-[67px]"
              alt=""
              src={img3}
              width={100}
              height={67}
            />
            <p className="text-[15px] font-normal w-[170px]">
              این هفته چه بازی های معرفی می شوند.
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[21px] font-semibold pb-5">پربازدیدترین صفحات</h3>
          <Link href="/" className="text-[15px] font-normal text-">
            جدیدترین بازی ها
          </Link>
          <Link href="/" className="text-[15px] font-normal text-">
            مقالات
          </Link>
          <Link href="/" className="text-[15px] font-normal text-">
            فروشگاه
          </Link>
          <Link href="/" className="text-[15px] font-normal text-">
            درباره ما
          </Link>
          <Link href="/" className="text-[15px] font-normal text-">
            تماس با ما
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[21px] font-semibold pb-5">عضویت در خبرنامه</h3>
          <div className="flex gap-5 w-[459px]">
            <input
              type="text"
              placeholder="ایمیل خود را وارد کنید."
              className="bg-[#1F212869] w-full rounded-xl px-3"
            />
            <Link href="/signIn" className="rounded-xl bg-[#6C5DD3]">
              <FaArrowLeft className="text-white size-[40px] p-2" />
            </Link>
          </div>
          <Image
            alt=""
            src={enamad}
            width={443}
            height={130}
            className="p-2 bg-white rounded-xl w-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-between h-[86px] bg-mainOrange -mx-[100px] px-[100px]">
        <p className=" text-[17px] font-medium">
          کپی بخش یا کل هر کدام از مطالب تنها با کسب مجوز مکتوب امکان پذیر است.
        </p>
        <div className="gap-10 flex ">
          <Link href="http://instagram.com">
            <FaInstagram className="size-[30px]" />
          </Link>
          <Link href="http://whatsapp.com">
            <FaWhatsapp className="size-[30px]" />
          </Link>
          <Link href="http://linkedin.com">
            <CiLinkedin className="size-[30px]" />
          </Link>
          <Link href="http://twitter.com">
            <CiTwitter className="size-[30px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;
