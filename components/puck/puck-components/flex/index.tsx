/* eslint-disable react/no-array-index-key */
import { ComponentConfig, DropZone } from '@measured/puck';
import { cn } from '@/lib/utils';

export type FlexProps = {
  items: { minItemWidth?: number }[];
  minItemWidth: number;
  className?: string;
};

export const Flex: ComponentConfig<FlexProps> = {
  label: 'Flex',
  fields: {
    className: { type: 'text' },
    items: {
      type: 'array',
      arrayFields: {
        minItemWidth: { type: 'number' }
      },
      /**
       * Custom label for the array item
       */
      getItemSummary: (_, id) => `Item ${(id as number) + 1}`
    },
    minItemWidth: {
      label: 'Minimum Item Width',
      type: 'number',
      min: 0
    }
  },
  defaultProps: {
    items: [{}, {}],
    minItemWidth: 356
  },
  render: ({ items, minItemWidth, className }) => {
    return (
      <section className={cn(`mx-auto flex min-h-0 min-w-0 flex-row flex-wrap gap-[24px]`, className)}>
        {items.map((item, i) => (
          <div key={i} className={`flex-1`} style={{ minWidth: item.minItemWidth || minItemWidth }}>
            <DropZone zone={`item-${i + 1}`} />
          </div>
        ))}
      </section>
    );
  }
};
