import Section from '@/components/Section';
import Button from '@/components/Button';

const rates = [
  { name: 'Day Rental', price: '$2,400', detail: '6-hour Manhattan block, chauffeur and staging included.' },
  { name: 'Extension Hour', price: '$325/hr', detail: 'Add hours beyond the initial 6-hour reservation.' },
  { name: 'Multi-Day Activation', price: '$1,950/day', detail: '3-day minimum. Optional removable logo decals on both sides.' }
];

export default function RatesPage() {
  return (
    <main>
      <Section title="Rates" subtitle="Sample pricing for planning. Final quotes adjust by schedule, mileage, and production complexity.">
        <div className="grid gap-5 md:grid-cols-3">
          {rates.map((rate) => (
            <article key={rate.name} className="gold-border bg-black/30 p-6">
              <h3 className="font-display text-2xl text-amber">{rate.name}</h3>
              <p className="mt-2 text-2xl">{rate.price}</p>
              <p className="mt-3 text-sm text-stone-300">{rate.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-8"><Button href="/book">Start Booking</Button></div>
      </Section>
    </main>
  );
}
