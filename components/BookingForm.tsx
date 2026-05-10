'use client';

import { FormEvent, useState } from 'react';
import Button from './Button';

export default function BookingForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Submitting your request...');

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget).entries()))
    });

    const data = await response.json();
    setStatus(data.message ?? 'Request sent.');
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-sm border border-amber/20 bg-velvet/40 p-6">
      {['date','time','pickup','dropoff','occasion','guestCount','name','email','phone'].map((field) => (
        <input key={field} name={field} required className="rounded-sm border border-amber/30 bg-black/40 p-3 text-sm" placeholder={field.replace(/([A-Z])/g,' $1')} type={field==='email'?'email':field==='date'||field==='time'?field:'text'} />
      ))}
      <textarea name="notes" rows={4} className="rounded-sm border border-amber/30 bg-black/40 p-3 text-sm" placeholder="Notes: photo locations, route, logo decal details..." />
      <div className="flex items-center justify-between gap-4">
        <Button type="submit">Request Booking</Button>
        <p className="text-xs text-stone-300">{status}</p>
      </div>
    </form>
  );
}
