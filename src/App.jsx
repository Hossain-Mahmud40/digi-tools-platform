import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/NavBar/Navbar";
import Products from "./Components/products/Products";
import ProductsIntro from "./Components/products/ProductsIntro";

function App() {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <>
      <header>
        <Navbar navLinks={navLinks} />
      </header>
      <HeroSection></HeroSection>
      <ProductsIntro></ProductsIntro>
      <Products></Products>
    </>
  );
}

export default App;
