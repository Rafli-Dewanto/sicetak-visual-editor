import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ComponentConfig, DropZone } from '@measured/puck';

export type AspectRatioProps = {
  aspectRatio: '4/3' | '16/9' | '9/16' | '1/1' | '2/3' | '3/2' | '3/4' | '4/5' | '16/10';
};

export const AspectRatioBlock: ComponentConfig<AspectRatioProps> = {
  label: 'Aspect Ratio',
  fields: {
    aspectRatio: {
      type: 'select',
      options: [
        { label: '4/3', value: '4/3' },
        { label: '16/9', value: '16/9' },
        { label: '9/16', value: '9/16' },
        { label: '1/1', value: '1/1' },
        { label: '2/3', value: '2/3' },
        { label: '3/2', value: '3/2' },
        { label: '3/4', value: '3/4' },
        { label: '4/5', value: '4/5' },
        { label: '16/10', value: '16/10' }
      ],
      label: 'Aspect Ratio'
    }
  },
  defaultProps: {
    aspectRatio: '16/9'
  },
  render: ({ aspectRatio }) => {
    const ratio = Number(aspectRatio.split('/')[0]) / Number(aspectRatio.split('/')[1]);
    return (
      <AspectRatio ratio={ratio}>
        <DropZone zone="aspect-ratio" />
      </AspectRatio>
    );
  }
};
