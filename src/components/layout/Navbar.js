import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const getProductsQuantity = useSelector((state) => state.cart);

  const { cartItems, cartTotalQuantity, cartTotalAmount } = getProductsQuantity;
  return (
    <div className="py-2 px-4 relative bg-gray-200 shadow-sm">
      <div className="max-w-screen-lg mx-auto items-center flex justify-between">
        <div className="logo font-bold">
          <Link to="/">
          <img
            src="https://heagerindia.com/wp-content/uploads/2018/12/Heager-Logo-150x73.png"
            alt=""
          />
          </Link>
        </div>
        <ul className="md:flex hidden  items-center ">
          <li className="mr-4 border-4 p-2 capitalize text-md">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mr-4 border-4 p-2 capitalize text-md">
            <Link to={"/businesses-service"}>businesses-service</Link>
          </li>
          <li className="mr-4 border-4 p-2 capitalize text-md">
            <Link to={"/about-us"}>about us</Link>
          </li>
          <li className="mr-4 border-4 p-2 capitalize text-md">
            <Link to={"/contact"}>contact</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="relative mr-4">
            <Link to="/cart">
              <button className="btn mr-1 bg-red-400 px-4 py-1 rounded text-gray-50 font-bold">
                Cart
              </button>
            </Link>
            <span className="  absolute -top-2 right-0  rounded-full">
              {cartTotalAmount > 0 && (
                <p className="bg-purple-300  px-2  rounded-full">
                  {cartTotalQuantity}
                </p>
              )}
            </span>
          </div>
          {/* loginButton  */}
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="btn mr-1 bg-red-400 px-4 py-1 rounded text-gray-50 font-bold"
          >
            login
          </button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
