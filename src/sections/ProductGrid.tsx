import { useState } from 'react'
import { categories, margin, products, type Product } from '@/data/products'
import { ProductArt } from '@/components/CrabMark'
import { useCart, usd } from '@/lib/cart'

const cardTones = ['bg-sand', 'bg-pink-soft', 'bg-white'] as const

function ProductCard({ p, tone, featured }: { p: Product; tone: string; featured: boolean }) {
  const { add } = useCart()
  return (
    <article
      className={`reveal group rounded-3xl ${tone} p-6 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 ${
        featured ? 'sm:col-span-2 sm:row-span-1' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <ProductArt
          kind={p.emojiArt}
          className={`text-teal-brand ${featured ? 'w-32 h-32' : 'w-24 h-24'} transition-transform duration-200 group-hover:scale-105`}
        />
        {p.badge && (
          <span className="rounded-full bg-teal-brand text-[color:var(--peach)] text-xs font-bold px-3 py-1 uppercase tracking-wide">
            {p.badge}
          </span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-display font-bold text-xl leading-tight">{p.name}</h3>
        <p className="mt-1 text-sm text-[color:var(--muted-foreground)] max-w-prose">{p.tagline}</p>
      </div>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <span className="font-display font-extrabold text-2xl">{usd(p.price)}</span>
          <span className="ml-2 text-xs font-medium text-[color:var(--muted-foreground)]">
            {margin(p)}% margin
          </span>
        </div>
        <div className="flex gap-2">
          {p.stripePaymentLink && (
            <a
              href={p.stripePaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal-brand text-[color:var(--peach)] px-4 py-2.5 text-sm font-bold hover:bg-[color:var(--teal-deep)] transition-colors cursor-pointer min-h-[44px] inline-flex items-center"
            >
              Buy now
            </a>
          )}
          <button
            onClick={() => add(p.id)}
            className="rounded-full bg-coral text-[color:var(--peach)] px-4 py-2.5 text-sm font-bold hover:bg-[color:var(--coral-deep)] transition-colors cursor-pointer min-h-[44px]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export function ProductGrid() {
  const [filter, setFilter] = useState<string>('all')
  const shown = filter === 'all' ? products : products.filter((p) => p.category === filter)

  return (
    <section id="shop" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="reveal flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral mb-2">The drop</p>
          <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-none">
            Gear that pinches
          </h2>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter products">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={filter === c.id}
              onClick={() => setFilter(c.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors cursor-pointer min-h-[44px] ${
                filter === c.id
                  ? 'bg-teal-brand text-[color:var(--peach)]'
                  : 'bg-white text-teal-brand hover:bg-sand'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {shown.map((p, i) => (
          <ProductCard key={p.id} p={p} tone={cardTones[i % cardTones.length]} featured={i === 0} />
        ))}
      </div>
    </section>
  )
}
