import { FC } from 'react';
import { PageTitleProps } from './pageTitle.types'

const PageTitle: FC<PageTitleProps> = ({
  title = ''
}) => {
  return (
    <h1 className="text-[24px] leading-[24px] mb-[25px] md:text-[30px] md:leading-[30px] lg:text-[40px] text-[#373737] lg:leading-[50px]">{title}</h1>
  );
};

export default PageTitle;
