import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'ghost';
};

export default function Button({ children, href, type = 'button', variant = 'primary' }: Props) {
  const className = `inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm tracking-[0.2em] uppercase transition ${
    variant === 'primary'
      ? 'bg-amber text-smoke hover:bg-[#e3b67b]'
      : 'border border-amber/60 text-amber hover:bg-amber/10'
  }`;

  if (href) return <Link href={href} className={className}>{children}</Link>;
  return <button type={type} className={className}>{children}</button>;
}
