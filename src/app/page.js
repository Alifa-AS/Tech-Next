import Image from "next/image";
import Banner from "./component/Banner";
import Card from "./component/Card";
import OfferCards from "./component/Offer";
import Product from "./component/Product";
import HotDeal from "./component/HotDeal";
import BestSelling from "./component/BestSelling";


export default function Home() {
  return (
    <main>
       <Banner />
       <Card />
       <OfferCards />
       <Product />
       <HotDeal />
       <BestSelling />
    </main>  
  );
}
