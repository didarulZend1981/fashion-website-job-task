
import Header from '../components/Header';
import Banner from '../components/Banner';
import BannerStats from '../components/BannerStats';
import FeaturedProduct from '../components/FeaturedProduct';
import BigDeal from '../components/BigDeal';
import ManCollection from '../components/ManCollection';


import Footer from '../components/Footer';




export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <BannerStats />
      <FeaturedProduct/>
      <BigDeal/>
      <ManCollection />
            


      
      <Footer />
    </div>
  );
}