import Section from '@/components/Section';

export default function TheRidePage() {
  return (
    <main>
      <Section title="The Ride" subtitle="Restored with restraint and intention: smoky glass, deep brown velvet, warm amber accents, and classic Lincoln proportions.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-stone-200">
            <p>Inside: plush wrap seating, soft cove lighting, polished wood, and a cabin tuned for conversation, camera, and celebration.</p>
            <p>Outside: long black silhouette, chrome trim, period-correct presence. Parked curbside, it feels like a film still.</p>
            <p>Capacity and itinerary are reviewed per booking. Every event is custom-routed through Manhattan and beyond.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1597006209261-c6be79d4ecfd?auto=format&fit=crop&w=1600&q=80" alt="HOTLINE interior" className="h-full w-full rounded-sm object-cover" />
        </div>
      </Section>
    </main>
  );
}
