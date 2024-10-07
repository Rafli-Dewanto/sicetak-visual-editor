import { cn } from '@/lib/utils';
import { ComponentConfig } from '@measured/puck';
import { Red_Hat_Display } from 'next/font/google';

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-red-hat-display'
});

export type LinkProps = {
  href: string;
  content: string;
  className?: string;
};

export const LinkComponent: ComponentConfig<LinkProps> = {
  label: 'Link',
  defaultProps: {
    href: '/',
    content: 'Link',
    className: ''
  },
  fields: {
    content: {
      type: 'text',
      label: 'Content'
    },
    href: {
      type: 'text',
      label: 'URL'
    },
    className: {
      type: 'text',
      label: 'Class Name'
    }
  },
  render: ({ href, content, className }) => (
    <a href={href}>
      <p className={cn(`${redHatDisplay.variable}`, className)}>{content}</p>
    </a>
  )
};
