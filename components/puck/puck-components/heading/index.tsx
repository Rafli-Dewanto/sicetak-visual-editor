import { ComponentConfig } from '@measured/puck';

export type HeadingProps = {
  textDecoration: 'underline' | 'line-through' | 'none';
  fontWeight: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  className?: string;
  title: string;
  textAlign: 'left' | 'center' | 'right';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
};

const sizeMap: { [key: string]: string } = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem'
};

const fontWeightMap: { [key: string]: number } = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

export const Heading: ComponentConfig<HeadingProps> = {
  label: 'Heading',
  fields: {
    textDecoration: {
      type: 'radio',
      options: [
        { label: 'Underline', value: 'underline' },
        { label: 'Line-through', value: 'line-through' },
        { label: 'None', value: 'none' }
      ]
    },
    fontWeight: {
      type: 'select',
      options: [
        { label: 'Thin', value: 'thin' },
        { label: 'Extralight', value: 'extralight' },
        { label: 'Light', value: 'light' },
        { label: 'Normal', value: 'normal' },
        { label: 'Medium', value: 'medium' },
        { label: 'Semibold', value: 'semibold' },
        { label: 'Bold', value: 'bold' },
        { label: 'Extrabold', value: 'extrabold' },
        { label: 'Black', value: 'black' }
      ]
    },
    title: {
      type: 'text'
    },
    size: {
      type: 'select',
      options: [
        { label: 'xs', value: 'xs' },
        { label: 'sm', value: 'sm' },
        { label: 'md', value: 'md' },
        { label: 'lg', value: 'lg' },
        { label: 'xl', value: 'xl' },
        { label: '2xl', value: '2xl' },
        { label: '3xl', value: '3xl' },
        { label: '4xl', value: '4xl' },
        { label: '5xl', value: '5xl' },
        { label: '6xl', value: '6xl' },
        { label: '7xl', value: '7xl' },
        { label: '8xl', value: '8xl' },
        { label: '9xl', value: '9xl' }
      ]
    },
    textAlign: {
      type: 'radio',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' }
      ]
    }
  },
  defaultProps: {
    fontWeight: 'bold',
    title: 'Heading',
    textAlign: 'center',
    size: '2xl',
    textDecoration: 'none'
  },
  render: ({ title, textAlign, size, fontWeight, textDecoration }) => (
    <div style={{ padding: 64 }}>
      <h1
        style={{
          textAlign,
          fontSize: sizeMap[size],
          fontWeight: fontWeightMap[fontWeight],
          textDecoration: textDecoration
        }}
      >
        {title}
      </h1>
    </div>
  )
};
