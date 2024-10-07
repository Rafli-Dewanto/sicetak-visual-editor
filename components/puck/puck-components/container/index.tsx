import { ComponentConfig, DropZone } from '@measured/puck';
import ContainerBlock from './container';

export type ContainerProps = {
  className?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
};

export const Container: ComponentConfig<ContainerProps> = {
  label: 'Container',
  fields: {
    className: {
      type: 'text'
    },
    paddingTop: {
      type: 'number',
      label: 'Padding Top (px)',
      min: 0
    },
    paddingBottom: {
      type: 'number',
      label: 'Padding Bottom (px)',
      min: 0
    },
    paddingLeft: {
      type: 'number',
      label: 'Padding Left (px)',
      min: 0
    },
    paddingRight: {
      type: 'number',
      label: 'Padding Right (px)',
      min: 0
    },
    marginTop: {
      type: 'number',
      label: 'Margin Top (px)',
      min: 0
    },
    marginBottom: {
      type: 'number',
      label: 'Margin Bottom (px)',
      min: 0
    },
    marginLeft: {
      type: 'number',
      label: 'Margin Left (px)',
      min: 0
    },
    marginRight: {
      type: 'number',
      label: 'Margin Right (px)',
      min: 0
    }
  },
  defaultProps: {
    paddingLeft: '16',
    paddingRight: '16'
  },
  render: (props) => (
    <ContainerBlock {...props}>
      <DropZone zone={'content'} />
    </ContainerBlock>
  )
};
