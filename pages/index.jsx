import Banner from "@/Components/Banner";
import BannerStats from "@/Components/BannerStats";
import BigDeal from "@/Components/BigDeal";
import FeaturedProduct from "@/Components/FeaturedProduct";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ManCollection from "@/Components/ManCollection";
import SummerBigDeal from "@/Components/SummerBigDeal";











export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <BannerStats />
      <FeaturedProduct/>
      <BigDeal/>
      <ManCollection />
      <SummerBigDeal/>
            


      
      <Footer />
    </div>
  );
}