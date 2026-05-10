import { ReactNode } from 'react';

type Props = { title?: string; subtitle?: string; children: ReactNode };

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
      {title && <h2 className="font-display text-3xl text-amber md:text-5xl">{title}</h2>}
      {subtitle && <p className="mt-3 max-w-3xl text-stone-300">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
