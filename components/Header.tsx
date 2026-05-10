import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['The Ride', '/the-ride'],
  ['Gallery', '/gallery'],
  ['Rates', '/rates'],
  ['Book', '/book']
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber/20 bg-smoke/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="font-display text-2xl tracking-[0.25em] text-amber">HOTLINE</Link>
        <ul className="flex gap-4 text-xs uppercase tracking-[0.18em] text-stone-300 md:gap-6">
          {links.map(([label, href]) => (
            <li key={href}><Link href={href} className="hover:text-amber">{label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
