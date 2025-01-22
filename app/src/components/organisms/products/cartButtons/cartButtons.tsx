'use client'; 

import { FC } from 'react';
import { CartButtonsProps } from './cartButtons.types';
import { useCart } from '@/app/src/lib/context/CartContext';
import { CartAddIcon} from "@/app/src/components/icons/cartAdd";
import { CartMinusIcon} from "@/app/src/components/icons/cartMinus";


const CartButtons: FC<CartButtonsProps> = ({ id }) => {
  const { addToCart, removeFromCart, cart } = useCart();
  const cartProduct = cart.filter((product) => product.id === id);
  const count = cartProduct.length ? cartProduct[0]?.quantity : 0;

  const addProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addToCart(id)
  }

  const removeProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFromCart(id);
  }
  return (
    <div className="flex items-start w-full mx-auto justify-start py-4">
      <button onClick={removeProduct} className="addd group rounded-l-full px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
        <CartMinusIcon />
      </button>
      <input type="text" disabled className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-0 h-[44px] text-center bg-transparent" placeholder={`${count}`} />
      <button onClick={addProduct} className="group rounded-r-full px-3 py-[10px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
        <CartAddIcon />
      </button>
    </div>
  );
};

export default CartButtons;
