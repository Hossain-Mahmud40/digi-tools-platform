import { Suspense, useState } from "react";
import "./App.css";
import Cart from "./Components/cart/Cart";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/NavBar/Navbar";
import Products from "./Components/products/Products";
import ProductsIntro from "./Components/products/ProductsIntro";
import axios from "axios";

const productsPromise = axios.get("/productData.json");

function App() {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product]);
  };

  const handleRemoveFromCart = (itemIndex) => {
    setCartItems((currentItems) =>
      currentItems.filter((_, index) => index !== itemIndex),
    );
  };

  return (
    <>
      <header>
        <Navbar navLinks={navLinks} />
      </header>
      <HeroSection />
      <ProductsIntro
        activeTab={activeTab}
        cartCount={cartItems.length}
        onTabChange={setActiveTab}
      />

      {activeTab === "products" ? (
        <Suspense
          fallback={<span className="loading loading-spinner loading-lg"></span>}
        >
          <Products
            onAddToCart={handleAddToCart}
            productsPromise={productsPromise}
          />
        </Suspense>
      ) : (
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      )}
    </>
  );
}

export default App;
