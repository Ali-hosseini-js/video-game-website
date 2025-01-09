import BlogCard from "@/module/BlogCard";
import { blog } from "@/data/blog";
import BlogCarousel from "@/module/BlogCarousel";

function Blog() {
  return (
    <div className="py-12">
      <h1 className="text-[28px] font-semibold underline underline-offset-[16px] text-center">
        جدیدترین مقالات
      </h1>
      <div className="flex gap-5 py-[50px] h-[900px]">
        <div className=" w-1/2">
          <BlogCarousel />
        </div>
        <div className="flex flex-col justify-between w-1/2 ">
          {blog.map((blog) => (
            <BlogCard key={blog.id} data={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
