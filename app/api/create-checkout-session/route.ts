import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();

  // Stripe placeholder:
  // 1) Initialize Stripe with your secret key.
  // 2) Build line items based on selected rental package.
  // 3) Create checkout session with success_url and cancel_url.
  // 4) Return session ID and redirect client to Stripe Checkout.

  return NextResponse.json({
    ok: true,
    message: `Thanks ${payload.name || 'there'} — your HOTLINE request is in review. Stripe checkout is coming soon.`
  });
}
