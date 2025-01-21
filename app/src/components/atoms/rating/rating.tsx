/* eslint-disable react/no-array-index-key */
import RatingIcon from '../../icons/rating';
import { FC } from 'react';
import { RatingProps } from './rating.types';

const Rating: FC<RatingProps> = ({ value = 0, count = 0 }) => {
  const classNames = {
    container: 'flex gap-[5px]',
  };

  return (
    <div className={classNames.container}>
      {[...Array(5)].map((_, index: number) => (
        <RatingIcon
          key={`value-${index}`}
          color={index < value ? '#21B59C' : '#c9c9c9'}
        />
      ))}
      {count ? <div className='text-[#5d5d5d] text-[14px]'>
        {value} - {count} reviews
      </div> : null
      }
    </div>
  );
};

export default Rating;

Rating.displayName = 'Rating';
