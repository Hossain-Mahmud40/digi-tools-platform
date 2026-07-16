import { use } from "react";
import Product from "./Product";

const Products = ({ productsPromise }) => {
  const productsres = use(productsPromise);
  const products = productsres.data;

  return (
    <section className="bg-white px-6 pb-20 lg:px-28">
      <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
