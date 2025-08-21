import Image from "next/image";
import Banner from "./component/Banner";
import Card from "./component/Card";
import OfferCards from "./component/Offer";
import Product from "./component/Product";


export default function Home() {
  return (
    <main>
       <Banner />
       <Card />
       <OfferCards />
       <Product />
    </main>  
  );
}
