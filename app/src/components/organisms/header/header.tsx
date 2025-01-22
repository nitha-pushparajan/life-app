'use client';

import LogoIcon from '@/app/src/components/icons/logo';
import CartIcon from '@/app/src/components/icons/cart';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/app/src/lib/context/CartContext';

const Header: React.FC = () => {
  const router = useRouter();
  const { cart } = useCart();
  const totalCartItems = cart.reduce((total, product) => total + product.quantity, 0);
  const [searchKey, setSearchKey] = useState('');
  const onChangeHandler = (e: any) => {
    setSearchKey(e.target.value);
  }

  const onSearch = (event: any) => {
    event.preventDefault();
    const newPath = `/?query=${searchKey}`;
    setSearchKey('');
    router.push(newPath);
  }

  const search =  <form onSubmit={onSearch}>
  <div className="flex px-4 py-1 md:mr-4 rounded-md border border-white overflow-hidden max-w-md mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
      className="fill-white mr-3 rotate-90">
      <path
        d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
      </path>
    </svg>
    <input type="text" name="query" value={searchKey} onChange={onChangeHandler} placeholder="Search..." className="w-full outline-none bg-transparent text-white text-[14px]" />
  </div>
</form>

  return (
    <header>
      <nav className="bg-[#003a5d] px-5 md:px-10 lg:px-20 md:py-3">
        <div className="flex justify-between items-center mx-auto">
          <Link href="/" className="flex items-center logo" role="link">
            <LogoIcon />
          </Link>
          <div className="flex items-center">
            <div className='hidden md:block'>{search}</div>
            <div className="relative flex cart">
              <CartIcon />
              {totalCartItems ? <span className="absolute left-[18px] bottom-[18px] md:left-[20px] md:bottom-[20px] rounded-full bg-red-600 min-w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{totalCartItems}</span>: null}
            </div>
          </div>
        </div>
        <div className='pb-[10px] md:hidden'>
          {search}
        </div>
      </nav>
    </header>
  );
};

export default Header;
