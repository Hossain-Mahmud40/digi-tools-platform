import { Suspense } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/NavBar/Navbar";
import Products from "./Components/products/Products";
import ProductsIntro from "./Components/products/ProductsIntro";
import axios from "axios";

const productsPromise = axios.get("/productData.json");

function App() {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <>
      <header>
        <Navbar navLinks={navLinks} />
      </header>
      <HeroSection />
      <ProductsIntro />

      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <Products productsPromise={productsPromise} />
      </Suspense>
    </>
  );
}

export default App;
