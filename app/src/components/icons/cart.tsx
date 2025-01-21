import { FC } from 'react';
import { IconProps } from './icon.types'

export const CartIcon: FC<IconProps> = ({ color = '#21b59c' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path id="icons8-shopping-cart" d="M3.47,2,1.9,2.012a.9.9,0,1,0,.012,1.8l.964-.007,2.965,7.112L4.766,12.64A1.9,1.9,0,0,0,6.351,15.5h9.958a.9.9,0,1,0,0-1.8H6.351c-.1,0-.112-.02-.058-.105h0L7.353,11.9h6.723a1.8,1.8,0,0,0,1.574-.926l3.243-5.838A.9.9,0,0,0,18.108,3.8H4.828L4.309,2.554A.9.9,0,0,0,3.47,2ZM6.4,16.4a1.8,1.8,0,1,0,1.8,1.8A1.8,1.8,0,0,0,6.4,16.4Zm9,0a1.8,1.8,0,1,0,1.8,1.8A1.8,1.8,0,0,0,15.408,16.4Z" transform="translate(-1.009 -2)" fill="#fff"></path></svg>
);
export default CartIcon;
