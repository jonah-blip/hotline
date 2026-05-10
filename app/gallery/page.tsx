const images = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1597006209261-c6be79d4ecfd?auto=format&fit=crop&w=1600&q=80'
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <h1 className="font-display text-4xl text-amber">Gallery</h1>
      <p className="mt-3 text-stone-300">Tinted glass, amber light, and late-night Manhattan reflections.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {images.map((image) => (
          <img key={image} src={image} alt="HOTLINE limousine" className="h-72 w-full rounded-sm object-cover md:h-96" />
        ))}
      </div>
    </main>
  );
}
