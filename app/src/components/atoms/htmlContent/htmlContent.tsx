'use client'; 

import { FC } from 'react';
import { HTMLContentProps } from './htmlContent.types'
import clsx from 'clsx';

const HTMLContent: FC<HTMLContentProps> = ({
  content = '',
  className = ''
}) => {
  return (
    <div className={clsx(className, 'html-content')} dangerouslySetInnerHTML={{ __html: content}} />
  );
};

export default HTMLContent;
