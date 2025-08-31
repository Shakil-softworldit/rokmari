import FeaturedProducts from "@/Component/Page/FeaturedProducts";
import LaptopSaleBanner from "@/Component/Page/LaptopSaleBanner";
import LightningDeals from "@/Component/Page/LightningDeals";
import MegaSalePage from "@/Component/Page/MegaSalePage";
import ShopCategory from "@/Component/Page/ShopCategory";
import WhyChooseElectro from "@/Component/Page/WhyChooseElectro";

export default function Home() {
  return (
    <div>
      <LaptopSaleBanner />
      <ShopCategory />
      <LightningDeals /> 
      <FeaturedProducts />
      <MegaSalePage />
      <WhyChooseElectro />
    </div>
  );
}
