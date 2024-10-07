import { cn } from '@/lib/utils';
import { ComponentConfig } from '@measured/puck';

export type VerticalSpaceProps = {
  height?: number;
  className?: string;
};

export const VerticalSpace: ComponentConfig<VerticalSpaceProps> = {
  label: 'Vertical Space',
  defaultProps: {
    height: 8
  },
  fields: {
    className: {
      type: 'text'
    },
    height: {
      type: 'select',
      options: Array.from({ length: 23 }, (_, i) => {
        const height = 8 * (i + 1); // Calculate height as multiples of 8 starting from 8 up to 184
        return {
          label: `${height}`,
          value: height
        };
      })
    }
  },
  render: ({ height, className }) => <div className={cn(className)} style={{ height: `${height}px` }} />
};
