import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  removCart,
  decreaseCart,
  clearCart,
} from "../../redux/reducers/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const getProductsQuantity = useSelector((state) => state.cart);
  const { cartItems, cartTotalQuantity, cartTotalAmount } = getProductsQuantity;

  /**
   *
   * @param {Object} item
   */
  const handelRemove = (item) => {
    dispatch(removCart(item));
  };
  const decrese = (item) => {
    dispatch(decreaseCart(item));
  };
  const increse = (item) => {
    dispatch(addToCart(item));
  };
  const clearCarts = () => {
    dispatch(clearCart());
  };
  // console.log(cartTotalQuantity);
  return (
    <div className="max-w-screen-xl mx-auto mt-16">
      {cartItems.length === 0 ? (
        <div>
          <div>
            <Link to="/products">go back to home</Link>
          </div>
        </div>
      ) : (
        <div className=" grid grid-cols-4 ">
          <div className="col-span-3">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className=" flex  shadow-lg p-4 mb-4 justify-between items-center"
              >
                <img src={item.image} className="w-28" alt="" />
                <button
                  className="bg-rose-400 px-3 py-2 text-gray-50 rounded"
                  onClick={() => handelRemove(item)}
                >
                  remove item
                </button>
                <p>{item.title}</p>

                <div className="flex w-20 items-center border-2 p-1 justify-between ">
                  <button onClick={() => decrese(item)} className="text-xl">
                    -
                  </button>
                  <p>{item.cartQuantity}</p>
                  <button onClick={() => increse(item)} className="text-xl">
                    +
                  </button>
                </div>
                <small>{item.price * item.cartQuantity}</small>
              </div>
            ))}
            <div onClick={() => clearCarts()}
            className='bg-red-400 inline-block px-8 py-3 rounded text-gray-50'
            >Clear Cart</div>
          </div>
          <div className=" col-span-1 flex   justify-end text-xl">
            <div>
              <div className="text-blue-700 text-3xl font-bold">
                 ${cartTotalAmount.toFixed(2)}
              </div>
              <div className="mt-16 bg-black text-gray-50 px-6 py-2 rounded">
                checkout
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
