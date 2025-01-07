import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import Button from "@/module/Button";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="flex justify-between pt-[80px] pb-[50px]">
      <div className="flex items-center gap-5">
        <Image alt="gaming website" src={logo} width={55} height={34} />
        <Link href="/" className="text-main">
          خانه
        </Link>
        <Link href="/shopping" className="text-main">
          فروشگاه
        </Link>
        <Link href="/about" className="text-main">
          درباره ما
        </Link>
        <Link href="/call" className="text-main">
          تماس با ما
        </Link>
        <Link href="/blog" className="text-main">
          وبلاگ
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button className="bg-inherit p-2 text-white">
          <FaSearch />
        </button>
        <Button text="ثبت نام" link="/signin" />
      </div>
    </div>
  );
}

export default Header;
