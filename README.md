# DigiTools - Digital Tools Buying Platform

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Manrope&weight=700&size=28&duration=2500&pause=800&color=7C3AED&center=true&vCenter=true&width=700&lines=DigiTools+-+Digital+Tools+Platform;Buy+Premium+Digital+Products;React+%2B+Tailwind+%2B+DaisyUI+Project" alt="DigiTools animated typing banner" />
</p>

## Project Overview

DigiTools is a modern digital tools buying platform where users can explore premium digital products, add selected products to the cart, view cart details, remove items, and proceed to checkout. The project is built based on a Figma design and focuses on clean UI, component-based architecture, dynamic JSON data, and interactive cart functionality.

## Live Demo

Live Site: Add your live site link here

Repository: Add your GitHub repository link here

## Technologies Used

- React.js
- JavaScript ES6+
- Tailwind CSS
- DaisyUI
- Axios
- React Toastify
- Lucide React
- React Icons
- JSON data

## Key Features

- Dynamic product cards loaded from JSON data
- Add to cart, remove from cart, and checkout functionality
- Real-time cart count shown in the navbar
- Product and cart section toggling
- Toast notifications for add, remove, and checkout actions
- Dynamic badge styles for product tags
- Responsive layout inspired by the provided Figma design
- Reusable components for Navbar, Hero, Products, Cart, Pricing, Steps, CTA, and Footer

## Main Sections

- Navbar with cart count indicator
- Hero banner with call-to-action buttons
- Stats section
- Product listing section
- Cart section with total price calculation
- Get Started in 3 Steps section
- Pricing section
- Call-to-action section
- Footer

## Cart Functionality

Users can add products to the cart by clicking the Buy Now button. Once a product is added, the button changes to a meaningful state. The cart count updates dynamically in the navbar. Users can remove selected products from the cart or clear the entire cart by proceeding to checkout.

## Project Structure

```txt
src/
  Components/
    NavBar/
    HeroSection/
    products/
    cart/
    steps/
    pricing/
    cta/
    footer/
  App.jsx
  main.jsx

public/
  productData.json
  pricing.json
  assets/
```

## JSON Data

Product data is stored in `public/productData.json`, and pricing plan data is stored in `public/pricing.json`. This keeps the UI dynamic and easier to maintain.

## What I Learned

While building this project, I practiced:

- Breaking UI into reusable React components
- Passing props between parent and child components
- Managing cart state using `useState`
- Rendering dynamic lists using `map()`
- Loading JSON data with Axios
- Showing user feedback with React Toastify
- Designing responsive layouts with Tailwind CSS and DaisyUI

## Future Improvements

- Add product filtering and search
- Add quantity control in cart
- Add localStorage support for cart persistence
- Add product details modal/page
- Improve accessibility and keyboard navigation

## Author

**Your Name**

- LinkedIn: Add your LinkedIn profile
- GitHub: Add your GitHub profile

---

Made with React, Tailwind CSS, and a lot of learning.
