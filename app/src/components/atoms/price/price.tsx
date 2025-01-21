import clsx from 'clsx';
import { FC } from 'react';
import { PriceProps } from './price.types';

const Price: FC<PriceProps> = ({
  regular_price,
  offer_price,
  currency,
}) => {

  const classes = {
    regularPriceWrapper: clsx('flex items-center no-wrap flex-col p-[5px] rounded-[5px]', {
      'bg-[#fc7575]': regular_price !== offer_price,
    }),
    regularPrice: clsx('text-[15px] font-bold line-all body1', {
      'text-white': regular_price !== offer_price,
      'text-black': regular_price === offer_price
    })
  };
  return (
    <div className="flex-col items-start flex items-start">
    <div className="flex items-center flex-row">
      <div className={classes.regularPriceWrapper}>
        <p className={classes.regularPrice}>
          {currency} {regular_price}
        </p>
      </div>
      {regular_price !== offer_price &&
        <div className="pl-2.5 line-through decoration-[#969191]">
          <p className="text-sm leading-5 text-[#969191] line-all body1">
          {currency} {offer_price}
          </p>
        </div>
      }
    </div>
  </div>
  );
};

export default Price;
