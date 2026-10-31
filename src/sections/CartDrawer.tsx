import { useState } from 'react'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import { useCart, usd } from '@/lib/cart'
import { createCheckoutSession, stripeCheckoutEndpoint } from '@/config/stripe'

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, subtotal, setQty, remove, clear } = useCart()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!open) return null

  const checkout = async () => {
    setError(null)
    if (!stripeCheckoutEndpoint) return // fallback panel shows instead
    setBusy(true)
    try {
      const url = await createCheckoutSession(items.map((i) => ({ id: i.product.id, qty: i.qty })))
      if (url) window.location.href = url
      else setError('Checkout endpoint did not return a Stripe URL.')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Checkout failed.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        className="absolute inset-0 bg-teal-brand/50 cursor-pointer"
        onClick={onClose}
        aria-label="Close cart"
      />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-peach shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-[color:var(--border)]">
          <h2 className="font-display font-extrabold uppercase text-2xl">Your bucket</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-sand transition-colors cursor-pointer min-h-[44px] min-w-[44px] grid place-items-center"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 && (
            <div className="text-center py-16">
              <p className="font-display font-bold text-xl">Nothing in the bucket yet.</p>
              <p className="text-sm text-[color:var(--muted-foreground)] mt-2">
                The crab is patient. The deals are not.
              </p>
              <button
                onClick={onClose}
                className="mt-6 rounded-full bg-coral text-[color:var(--peach)] px-6 py-3 font-bold hover:bg-[color:var(--coral-deep)] transition-colors cursor-pointer min-h-[44px]"
              >
                Browse the drop
              </button>
            </div>
          )}
          {items.map(({ product, qty }) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 flex gap-4 items-center">
              <div className="flex-1">
                <p className="font-bold">{product.name}</p>
                <p className="text-sm text-[color:var(--muted-foreground)]">{usd(product.price)}</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setQty(product.id, qty - 1)}
                  className="rounded-full p-2 hover:bg-sand transition-colors cursor-pointer min-h-[44px] min-w-[44px] grid place-items-center"
                  aria-label={`Decrease quantity of ${product.name}`}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-6 text-center font-bold" aria-live="polite">{qty}</span>
                <button
                  onClick={() => setQty(product.id, qty + 1)}
                  className="rounded-full p-2 hover:bg-sand transition-colors cursor-pointer min-h-[44px] min-w-[44px] grid place-items-center"
                  aria-label={`Increase quantity of ${product.name}`}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => remove(product.id)}
                className="rounded-full p-2 hover:bg-sand transition-colors cursor-pointer min-h-[44px] min-w-[44px] grid place-items-center text-[color:var(--destructive)]"
                aria-label={`Remove ${product.name} from cart`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-[color:var(--border)] space-y-4">
            <div className="flex justify-between font-display font-extrabold text-xl">
              <span>Subtotal</span>
              <span>{usd(subtotal)}</span>
            </div>
            {subtotal < 50 && (
              <p className="text-sm text-[color:var(--muted-foreground)]">
                Add {usd(50 - subtotal)} more for free shipping.
              </p>
            )}
            {stripeCheckoutEndpoint ? (
              <button
                onClick={checkout}
                disabled={busy}
                className="w-full rounded-full bg-coral text-[color:var(--peach)] px-6 py-4 font-bold text-lg hover:bg-[color:var(--coral-deep)] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
              >
                {busy ? 'Opening Stripe…' : 'Checkout with Stripe'}
              </button>
            ) : (
              <div className="rounded-2xl bg-sand p-4 text-sm">
                <p className="font-bold">Payments go live at launch.</p>
                <p className="mt-1 text-[color:var(--muted-foreground)]">
                  Stripe checkout is wired in the codebase — it activates the moment the
                  store owner connects their Stripe account (one config line, see README).
                </p>
              </div>
            )}
            {error && <p className="text-sm font-medium text-[color:var(--destructive)]">{error}</p>}
            <button
              onClick={clear}
              className="w-full text-sm font-medium text-[color:var(--muted-foreground)] hover:text-teal-brand transition-colors cursor-pointer py-2"
            >
              Empty the bucket
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
