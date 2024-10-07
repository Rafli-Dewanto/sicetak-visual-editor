import { cn } from '@/lib/utils';
import { ComponentConfig, DropZone } from '@measured/puck';

export type ColumnsProps = {
  columns: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  className?: string;
};

export const Columns: ComponentConfig<ColumnsProps> = {
  label: 'Columns',
  defaultProps: {
    columns: '1'
  },
  fields: {
    className: {
      type: 'text',
      label: 'Class Name'
    },
    columns: {
      type: 'radio',
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
        { label: '11', value: '11' },
        { label: '12', value: '12' }
      ]
    }
  },
  render: ({ columns, className }) => {
    return (
      <div
        className={cn(`container grid grid-cols-1 content-center justify-items-center gap-6`, {
          [`sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-${columns}`]: true,
          className
        })}
      >
        {Array.from({ length: Number(columns) }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <DropZone key={`col-${index}`} zone={`col-${index}`} />
        ))}
      </div>
    );
  }
};
