import Image from "next/image";

function TrailerCard({ data }) {
  return (
    <div className="w-[290px] h-[350px] group hover:scale-y-110 transition-all rounded-3xl bg-[#242731]">
      <Image
        className="group-hover:drop-shadow-glow h-1/2"
        alt=""
        src={data.image}
        width={280}
        height={200}
      />
      <div className="flex flex-col justify-between gap-3 p-6 h-1/2">
        <h2 className="text-[16px] font-medium text-wrap">{data.title}</h2>
        <div className="flex flex-col gap-3">
          <div className="flex gap-[50px]">
            <p className="text-[14px] font-medium text-main">
              {data.view} بازدید
            </p>
            <p className="text-[14px] font-medium text-main"> {data.time} </p>
          </div>
          <p className="text-[13px] font-medium">
            منتشرکننده: {data.publisher}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrailerCard;
