'use client'; 

import { FC } from 'react';
import { HTMLContentProps } from './htmlContent.types'

const HTMLContent: FC<HTMLContentProps> = ({
  content = '',
  className = ''
}) => {
  return (
    <p className={className} dangerouslySetInnerHTML={{ __html: content}} />
  );
};

export default HTMLContent;
