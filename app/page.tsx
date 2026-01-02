import Image from "next/image";
import Banner from "../Components/Banner/Banner";
import About from '../Components/About/About'
import Services from "../Components/Services/Services";
import Feature from "../Components/Feature/Feature";
import Choose from '../Components/Choose/Choose';
import ContactBtn from '../Components/ContactBtn/ContactBtn'


export default function Home() {
  return (
    <div className="">
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Feature></Feature>
        <Choose></Choose>
        <ContactBtn></ContactBtn>

    </div>
  );
}
