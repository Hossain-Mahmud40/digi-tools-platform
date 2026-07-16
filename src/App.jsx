import "./App.css";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ProductsIntro from "./Components/ProductsIntro";

function App() {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <>
      <header>
        <Navbar navLinks={navLinks} />
      </header>
      <HeroSection></HeroSection>
      <ProductsIntro></ProductsIntro>
      <section className="products"></section>
    </>
  );
}

export default App;
