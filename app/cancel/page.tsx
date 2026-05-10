import Button from '@/components/Button';

export default function CancelPage() {
  return <main className="mx-auto max-w-3xl px-4 py-20 text-center"><h1 className="font-display text-4xl text-amber">Checkout Canceled</h1><p className="mt-4 text-stone-300">No charge was made. This page is reserved for future Stripe cancellation handling.</p><div className="mt-8"><Button href="/book" variant="ghost">Back to Booking</Button></div></main>;
}
