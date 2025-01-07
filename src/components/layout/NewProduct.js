import Button from "@/module/Button";
import { products } from "@/data/products";
import ProductCard from "@/module/ProductCard";
function NewProduct() {
  return (
    <div className=" py-10">
      <div className="flex justify-between items-center py-5">
        <p className="text-[28px] font-semibold">جدیدترین بازی های فروشگاه</p>
        <Button text="مشاهده همه" link="/products/category" />
      </div>
      <div className="flex flex-wrap items-center justify-between pt-10">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default NewProduct;
