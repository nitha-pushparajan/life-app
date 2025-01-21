import { FC } from 'react';
import { IconProps } from './icon.types'

export const RatingIcon: FC<IconProps> = ({ color = '#21b59c' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18.926"
    height="18.001"
    viewBox="0 0 18.926 18.001"
  >
    <path
      id="icons8-star-filled"
      d="M19.886,7.857H12.8L10.423,1,8.049,7.857.96,7.875,6.582,12.2,4.575,19l5.848-4.011L16.272,19l-2.007-6.8Z"
      transform="translate(-0.96 -1)"
      fill={color}
    />
  </svg>
);
export default RatingIcon;
