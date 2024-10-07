import React from 'react';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  id: string;
  title: string;
  description: string;
  className?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { id, title, description, className } = props;
  return (
    <div id={id} className={cn(`mb-8 mt-5 py-4 text-center`, className)}>
      <span className="block pb-4 text-4xl font-bold tracking-[0.03em]">{title}</span>
      <span className="text-base tracking-[0.03em]">{description}</span>
    </div>
  );
};

export default SectionHeading;
