import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./Components/cart/Cart";
import CallToAction from "./Components/cta/CallToAction";
import Footer from "./Components/footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/NavBar/Navbar";
import Pricing from "./Components/pricing/Pricing";
import Products from "./Components/products/Products";
import ProductsIntro from "./Components/products/ProductsIntro";
import Steps from "./Components/steps/Steps";
import axios from "axios";

const productsPromise = axios.get("/productData.json");
const pricingPromise = axios.get("/pricing.json");

function App() {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const isAlreadyAdded = cartItems.some((item) => item.id === product.id);

    if (isAlreadyAdded) {
      return;
    }

    setCartItems((currentItems) => [...currentItems, product]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (itemIndex) => {
    const removedItem = cartItems[itemIndex];

    if (!removedItem) {
      return;
    }

    setCartItems((currentItems) =>
      currentItems.filter((_, index) => index !== itemIndex),
    );
    toast.info(`${removedItem.name} removed from cart`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }

    toast.success("Checkout complete. Your cart is now empty.");
    setCartItems([]);
  };

  return (
    <>
      <header>
        <Navbar cartCount={cartItems.length} navLinks={navLinks} />
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
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            productsPromise={productsPromise}
          />
        </Suspense>
      ) : (
        <Cart
          cartItems={cartItems}
          onCheckout={handleCheckout}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}

      <Steps />
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <Pricing pricingPromise={pricingPromise} />
      </Suspense>
      <CallToAction />
      <Footer />
      <ToastContainer position="top-right" autoClose={1800} />
    </>
  );
}

export default App;
