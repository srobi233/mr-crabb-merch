import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { products, type Product } from '@/data/products'

export type CartItem = { product: Product; qty: number }

type CartCtx = {
  items: CartItem[]
  count: number
  subtotal: number
  add: (id: string) => void
  remove: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
}

const Ctx = createContext<CartCtx | null>(null)
const KEY = 'mrcrabb-cart-v1'

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Record<string, number>>(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '{}') as Record<string, number>
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(lines))
  }, [lines])

  const value = useMemo<CartCtx>(() => {
    const items = Object.entries(lines)
      .map(([id, qty]) => {
        const product = products.find((p) => p.id === id)
        return product ? { product, qty } : null
      })
      .filter((x): x is CartItem => x !== null)
    return {
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((n, i) => n + i.qty * i.product.price, 0),
      add: (id) => setLines((l) => ({ ...l, [id]: (l[id] ?? 0) + 1 })),
      remove: (id) =>
        setLines((l) => {
          const next = { ...l }
          delete next[id]
          return next
        }),
      setQty: (id, qty) =>
        setLines((l) => {
          if (qty <= 0) {
            const next = { ...l }
            delete next[id]
            return next
          }
          return { ...l, [id]: qty }
        }),
      clear: () => setLines({}),
    }
  }, [lines])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}

export const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
