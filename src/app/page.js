import Carousel from "@/layout/Carousel";
import NewProduct from "@/layout/NewProduct";
import Blog from "@/layout/Blog";
import Review from "@/layout/Review";
import Trailer from "@/layout/Trailer";

function Home() {
  return (
    <div>
      <Carousel />
      <NewProduct />
      <Blog />
      <Review />
      <Trailer />
    </div>
  );
}

export default Home;
