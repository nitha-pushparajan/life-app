'use client'; 

import { FC } from 'react';
import { CartButtonsProps } from './cartButtons.types';
import { useCart } from '@/app/src/lib/context/CartContext';

const CartButtons: FC<CartButtonsProps> = ({ id }) => {
  const { addToCart, removeFromCart, cart } = useCart();
  const cartProduct = cart.filter((product) => product.id === id);
  const count = cartProduct.length ? cartProduct[0]?.quantity : 0;

  const addProduct = (event: any) => {
    event.preventDefault();
    addToCart(id)
  }

  const removeProduct = (event: any) => {
    event.preventDefault();
    removeFromCart(id);
  }
  return (
    <div className="flex items-start w-full mx-auto justify-start py-4">
      <button onClick={removeProduct} className="addd group rounded-l-full px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round"></path>
          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round"></path>
          <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round"></path>
        </svg>
      </button>
      <input type="text" disabled className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-0 h-[44px] text-center bg-transparent" placeholder={`${count}`} />
      <button onClick={addProduct} className="group rounded-r-full px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round"></path>
          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round"></path>
          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round"></path>
        </svg>
      </button>
    </div>
  );
};

export default CartButtons;
