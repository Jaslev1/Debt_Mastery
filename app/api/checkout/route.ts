
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID, quantity: 1 }],
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/'
  })

  return Response.json({ url: session.url })
}
