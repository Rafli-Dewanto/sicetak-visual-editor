import React from 'react';

type ShowProps = {
  fallback?: React.ReactNode;
  when: boolean;
  children: React.ReactNode;
};

const Show = (props: ShowProps) => {
  const { children, fallback, when } = props;

  if (!when && !fallback) {
    return null;
  } else if (!when && fallback) {
    return fallback;
  } else {
    return children;
  }
};

export default Show;
