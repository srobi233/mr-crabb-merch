// Stripe wiring — one config point, graceful fallback.
//
// Two live modes:
// 1. Checkout Sessions endpoint (recommended for carts):
//    Set VITE_STRIPE_CHECKOUT_ENDPOINT to a backend URL that accepts
//    POST { items: [{id, qty}] } and returns { url } of a Stripe Checkout Session.
//    The cart checkout button will redirect there.
// 2. Per-product Payment Links (zero-backend quick start):
//    Paste each product's payment link URL into products.ts (stripePaymentLink).
//    Product cards then show a "Buy now" shortcut straight to Stripe.
//
// When neither is configured the UI shows a clear "payments not live yet"
// state instead of failing silently.

export const stripeCheckoutEndpoint: string | undefined = import.meta.env
  .VITE_STRIPE_CHECKOUT_ENDPOINT as string | undefined

export type CartLine = { id: string; qty: number }

export async function createCheckoutSession(items: CartLine[]): Promise<string | null> {
  if (!stripeCheckoutEndpoint) return null
  const res = await fetch(stripeCheckoutEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  })
  if (!res.ok) throw new Error(`Checkout failed: ${res.status}`)
  const data = (await res.json()) as { url?: string }
  return data.url ?? null
}
