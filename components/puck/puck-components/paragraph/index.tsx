import { TailwindFontSize, TailwindFontWeight } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ComponentConfig } from '@measured/puck';

export type ParagraphProps = {
  text: string;
  textAlign: 'left' | 'center' | 'right';
  fontWeight: TailwindFontWeight;
  textSize: TailwindFontSize;
  padding?: 'string';
  className?: string;
};

export const Paragraph: ComponentConfig<ParagraphProps> = {
  label: 'Paragraph',
  fields: {
    className: { type: 'text' },
    padding: {
      type: 'text',
      label: 'Padding'
    },
    text: { type: 'text' },
    textAlign: {
      type: 'radio',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' }
      ]
    },
    fontWeight: {
      type: 'radio',
      options: [
        { label: 'Thin', value: 'thin' },
        { label: 'Extra Light', value: 'extralight' },
        { label: 'Light', value: 'light' },
        { label: 'Normal', value: 'normal' },
        { label: 'Medium', value: 'medium' },
        { label: 'Semi Bold', value: 'semibold' },
        { label: 'Bold', value: 'bold' },
        { label: 'Extra Bold', value: 'extrabold' },
        { label: 'Black', value: 'black' }
      ]
    },
    textSize: {
      type: 'radio',
      options: [
        { label: 'X-Small', value: 'xs' },
        { label: 'Small', value: 'sm' },
        { label: 'Base', value: 'base' },
        { label: 'Large', value: 'lg' },
        { label: 'X-Large', value: 'xl' },
        { label: '2X-Large', value: '2xl' },
        { label: '3X-Large', value: '3xl' },
        { label: '4X-Large', value: '4xl' },
        { label: '5X-Large', value: '5xl' },
        { label: '6X-Large', value: '6xl' },
        { label: '7X-Large', value: '7xl' },
        { label: '8X-Large', value: '8xl' },
        { label: '9X-Large', value: '9xl' }
      ]
    }
  },
  defaultProps: {
    text: `lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    textAlign: 'center',
    fontWeight: 'normal',
    textSize: 'base'
  },
  render: ({ text, textAlign, fontWeight, textSize, padding, className }) => (
    <div
      style={{
        padding: `${padding}rem` || ''
      }}
    >
      <p className={cn(`text-${textAlign} font-${fontWeight} text-${textSize}`, className)}>{text}</p>
    </div>
  )
};
