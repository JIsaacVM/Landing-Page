import AboutUs from "./components/AboutUs";
import Colection from "./components/Colection";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Footer from "./Footer";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <Colection />
      <ContactUs />
      <Footer />
    </div>
  );
}