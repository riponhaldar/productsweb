import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/productListReducer";
import { addToCart } from "../../redux/reducers/CartSlice";
import { getTotal } from "../../redux/reducers/CartSlice";
import { useNavigate } from "react-router-dom";
const AllProducts = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const productList = useSelector((state) => state.productsList);
   const { status, product, isError, isLoading } = productList;

  useLayoutEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handelAddToCart = (items) => {
    dispatch(addToCart(items));
    nevigate("/cart");
    //  console.log(items);
  };

  useEffect(() => {
    dispatch(getTotal());
  }, []);

  return (
    <div className="text-center mt-16 ">
      {isLoading ? (
        <p className="text-xl text-purple-500">loading.. {isLoading}.</p>
      ) : isError ? (
        <p>anError . {isError}.a</p>
      ) : (
        <div className="max-w-screen-xl mx-auto  justify-center">
          <div className="grid grid-cols-1  md:grid-cols-4 justify-center mx-auto w-full">
            {product.map((item, index) => (
              <div className="w-72 h-96 mt-16 shadow-2xl shadow-red-100 p-4 bg-gray-50 m-4 ">
                <div className="w-40 h-44 justify-center mx-auto  ">
                  <img src={item.image} className="w-full h-full" alt="" />
                </div>
                <h1 className="truncate overflow-hidden my-2">{item.title}</h1>
                <div className="flex justify-between my-4">
                  <p className="text-purple-700 font-bold">${item.price}</p>
                  <p
                    className={`font-bold ${
                      item.rating.rate > 3.8
                        ? "text-green-600"
                        : "text-rose-700"
                    }`}
                  >
                    *{item.rating.rate}
                  </p>
                </div>
                <button
                  onClick={() => handelAddToCart(item)}
                  className="w-full bg-red-400 font-bold  rounded text-white py-4"
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
