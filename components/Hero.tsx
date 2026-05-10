import Button from './Button';

type Props = { title: string; subtitle: string; image: string; ctaHref?: string };

export default function Hero({ title, subtitle, image, ctaHref = '/book' }: Props) {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-smoke" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 md:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-amber">1986 Manhattan After Dark</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-stone-200">{subtitle}</p>
        <div className="mt-8"><Button href={ctaHref}>Reserve Hotline</Button></div>
      </div>
    </section>
  );
}
