import Image from "next/image";
import Tag from "./Tag";
import Button from "@/module/Button";

function BlogCard({ data }) {
  return (
    <div className="group flex p-2 gap-5 bg-[#F0F3F61A] rounded-2xl hover:bg-[#6C5DD34A] hover:drop-shadow-glow">
      <Image alt="" src={data.image} width={280} height={220} />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-3">
          {data.tag.map((i, index) => (
            <Tag key={index} text={i} />
          ))}
        </div>
        <h2 className="text-[17px] font-semibold">{data.title}</h2>
        <p className="text-[14px] font-medium text-main">
          {data.watch} نفر این مقاله را خوانده اند.
        </p>
        <div>
          <Button text="مشاهده مقاله" link={data.link} />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
