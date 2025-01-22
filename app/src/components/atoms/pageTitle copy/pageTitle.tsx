import { FC } from 'react';
import { PageTitleProps } from './pageTitle.types'

const PageTitle: FC<PageTitleProps> = ({
  title = ''
}) => {
  return (
    <h1 className="text-[24px] mb-[25px] md:text-[30px] lg:text-[40px] text-[#373737]">{title}</h1>
  );
};

export default PageTitle;
