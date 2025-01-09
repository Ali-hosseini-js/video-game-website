import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

function ReviewCard({ data }) {
  return (
    <div className="relative group ">
      <div className="flex-none w-full">
        <Image
          className="w-full h-[580px] object-cover"
          alt=""
          src={data.image}
          width={390}
          height={580}
        />
      </div>
      <div className="absolute inset-0 flex items-end group-hover:items-center group-hover:backdrop-blur-sm justify-center py-5">
        <div className="flex flex-col items-center justify-center gap-5 py-10">
          <h2 className="text-[26px] font-medium">{data.title}</h2>
          <p className="text-[20px] font-normal">{data.name}</p>
          <Link href={data.link}>
            <FaPlay className="text-white p-4 bg-[#FFFFFF12] backdrop-blur-sm group-hover:bg-mainOrange size-[60px] rounded-full group-hover:rounded-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
