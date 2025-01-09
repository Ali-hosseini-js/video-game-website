import { review } from "@/data/review";
import Button from "@/module/Button";
import ReviewCard from "@/module/ReviewCard";

function Review() {
  return (
    <div className="py-12">
      <h1 className="text-[28px] font-semibold underline underline-offset-[16px] text-center">
        جدیدترین نقد و بررسی ها
      </h1>
      <div className="flex gap-5 py-10">
        {review.map((i) => (
          <ReviewCard key={i.id} data={i} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button text="مشاهده همه" link="/trailer" />
      </div>
    </div>
  );
}

export default Review;
