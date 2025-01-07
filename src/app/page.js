import Carousel from "@/layout/Carousel";
import NewProduct from "@/layout/NewProduct";

function Home() {
  return (
    <div>
      <Carousel />
      <NewProduct />
      <div className="w-full h-6 bg-slate-500 ">سلام</div>
    </div>
  );
}

export default Home;
