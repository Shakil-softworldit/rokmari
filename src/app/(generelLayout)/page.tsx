
import CategoryPage from "@/Component/Page/Category";
import LaptopSaleBanner from "@/Component/Page/LaptopSaleBanner";
// import ProductCarousel from "@/Component/Page/product-carousel";


export default function Home() {
  return (
    <div>
      <LaptopSaleBanner />
      <CategoryPage />
      {/* <ProductCarousel /> */}
    </div>
  );
}
