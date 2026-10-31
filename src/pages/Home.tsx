import { useState } from 'react'
import { CartProvider } from '@/lib/cart'
import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { ProductGrid } from '@/sections/ProductGrid'
import { Pipeline, Story, Footer } from '@/sections/Pipeline'
import { CartDrawer } from '@/sections/CartDrawer'
import { useReveal } from '@/hooks/useReveal'

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false)
  useReveal()

  return (
    <CartProvider>
      <div className="min-h-dvh">
        <Header onOpenCart={() => setCartOpen(true)} />
        <main>
          <Hero />
          <ProductGrid />
          <Pipeline />
          <Story />
        </main>
        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  )
}
