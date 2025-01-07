import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropleft } from "react-icons/io";

function ProductCard({ data }) {
  return (
    <div className="w-[280px] group hover:scale-y-110 transition-all">
      <Image
        className="group-hover:drop-shadow-glow"
        alt=""
        src={data.image}
        width={280}
        height={200}
      />
      <div className="flex flex-col gap-3 p-6 bg-gradient-to-b from-[#F0F3F600] to-[#FF754C1A]">
        <h2 className="text-[25px] font-medium text-wrap">{data.title}</h2>
        <p className="text-mainOrange text-[22px] font-medium text-center">
          {data.price}
        </p>
      </div>
      <div className="flex justify-between items-center pr-6 pt-6">
        <p> {data.sell} نفر خرید کرده اند</p>
        <Link href={data.link}>
          <div className="bg-[#FF754C2B] group-hover:bg-mainOrange w-[66px] h-[55px] flex items-center justify-center rounded-r-xl rounded-bl-xl">
            <p className="text-mainOrange group-hover:text-white ">خرید</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
