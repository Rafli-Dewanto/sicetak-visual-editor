import { ComponentConfig } from '@measured/puck';
import SectionHeadingBlock from './section-heading';

export type SectionHeadingProps = {
  id?: string;
  title: string;
  description: string;
  className?: string;
};

export const SectionHeading: ComponentConfig<SectionHeadingProps> = {
  label: 'Section Heading',
  fields: {
    id: { type: 'text' },
    title: { type: 'text' },
    description: { type: 'text' },
    className: { type: 'text' }
  },
  render: ({ title, description, id, className }) => (
    <SectionHeadingBlock id={id} title={title} description={description} className={className} />
  )
};
