 import React from "react";
import { Link } from "react-router-dom";

function HomePage(params) {
  return (
    <div className="mt-12">
      <h1 className="text-1xl font-bold text-center">
        <Link to={"/businesses-service"}>Go All Products</Link>
      </h1>
       <div></div>
    </div>
  );
}

export default HomePage;
