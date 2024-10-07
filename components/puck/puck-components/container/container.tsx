/* eslint-disable no-prototype-builtins */
import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children: React.ReactNode;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  className?: string;
};

export default function Container(props: Props) {
  const {
    children,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    className
  } = props;

  return (
    <div
      className={cn(className)}
      style={{
        marginRight: `${marginRight ? `${marginRight}px` : ''}`,
        marginLeft: `${marginLeft ? `${marginLeft}px` : ''}`,
        marginTop: `${marginTop ? `${marginTop}px` : ''}`,
        marginBottom: `${marginBottom ? `${marginBottom}px` : ''}`,
        paddingLeft: `${paddingLeft ? `${paddingLeft}px` : ''}`,
        paddingRight: `${paddingRight ? `${paddingRight}px` : ''}`,
        paddingTop: `${paddingTop ? `${paddingTop}px` : ''}`,
        paddingBottom: `${paddingBottom ? `${paddingBottom}px` : ''}`
      }}
    >
      {children}
    </div>
  );
}
