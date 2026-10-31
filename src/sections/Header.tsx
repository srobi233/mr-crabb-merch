import { ShoppingBag } from 'lucide-react'
import { CrabMark } from '@/components/CrabMark'
import { useCart } from '@/lib/cart'

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const { count } = useCart()
  return (
    <header className="sticky top-0 z-40 bg-peach/90 backdrop-blur border-b border-[color:var(--border)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 cursor-pointer" aria-label="Mr Crabb home">
          <CrabMark className="w-10 h-8 text-coral" />
          <span className="font-display font-extrabold text-lg uppercase tracking-tight">
            Mr Crabb
          </span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <a href="#shop" className="hover:text-coral transition-colors">Shop</a>
          <a href="#pipeline" className="hover:text-coral transition-colors">How it works</a>
          <a href="#story" className="hover:text-coral transition-colors">Story</a>
        </nav>
        <button
          onClick={onOpenCart}
          className="relative inline-flex items-center gap-2 rounded-full bg-teal-brand text-[color:var(--peach)] px-4 py-2 text-sm font-bold hover:bg-[color:var(--teal-deep)] transition-colors cursor-pointer min-h-[44px]"
          aria-label={`Open cart, ${count} items`}
        >
          <ShoppingBag className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">Cart</span>
          {count > 0 && (
            <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 rounded-full bg-coral text-[color:var(--peach)] text-xs font-bold grid place-items-center px-1">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
