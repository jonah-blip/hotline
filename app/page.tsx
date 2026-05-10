import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function HomePage() {
  return (
    <main>
      <Hero
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80"
        title="Velvet Seats. Chrome Lines. Manhattan at Midnight."
        subtitle="HOTLINE is a restored 1986 Lincoln stretch Town Car for select day and multi-day rentals. Meetings, film shoots, parties, engagements, weddings—and entrances that remember your name."
      />
      <Section title="A Private Icon, Not a Livery Service" subtitle="This is a curated rental experience: 6-hour day blocks plus extension hours, or 3+ day activations with optional logo decals on both sides.">
        <div className="grid gap-4 md:grid-cols-3">
          {['After-dark arrivals','Film-ready interiors','Brand-ready multi-day wraps'].map((item) => (
            <article key={item} className="gold-border bg-black/30 p-5 text-stone-200">{item}</article>
          ))}
        </div>
        <div className="mt-8"><Button href="/rates" variant="ghost">View Rates</Button></div>
      </Section>
    </main>
  );
}
