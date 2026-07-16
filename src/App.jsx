import { useState } from "react";
import "./App.css";
import { FaGithub } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-red-500 font-bold text-2xl bg-amber-700 py-8 text-center">
        Helloo <FaGithub></FaGithub>
      </h2>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
