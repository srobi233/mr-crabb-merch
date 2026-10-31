const steps = [
  {
    n: '01',
    title: 'You order',
    body: 'Checkout runs on Stripe. Cards, Apple Pay, Google Pay — no account needed.',
    tone: 'bg-white',
  },
  {
    n: '02',
    title: 'We route it',
    body: 'The order fires straight to the print partner (Printify / Printful) closest to you.',
    tone: 'bg-pink-soft',
  },
  {
    n: '03',
    title: 'They print & ship',
    body: 'Printed in 2–4 days, shipped tracked, under the Mr Crabb label. We hold zero stock.',
    tone: 'bg-sand',
  },
  {
    n: '04',
    title: 'Margin lands',
    body: 'Stripe pays out to the shop. Cost stays with the printer. That’s the whole trick.',
    tone: 'bg-white',
  },
]

export function Pipeline() {
  return (
    <section id="pipeline" className="bg-teal-brand text-[color:var(--peach)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="reveal max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-soft mb-2">
            How it works
          </p>
          <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-none">
            A shop with no shelves
          </h2>
          <p className="mt-4 text-[color:var(--sand)] text-lg">
            This store is a dropshipping pipeline: every product is made only after
            it’s sold. Below is the exact path your order takes.
          </p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <li key={s.n} className={`reveal rounded-3xl ${s.tone} text-teal-brand p-6`}>
              <span className="font-display font-extrabold text-coral text-lg">{s.n}</span>
              <h3 className="font-display font-bold text-xl mt-2">{s.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Story() {
  return (
    <section id="story" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div className="reveal">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral mb-2">The story</p>
        <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-tight">
          Grumpy is a growth market
        </h2>
        <p className="mt-5 text-lg text-[color:var(--muted-foreground)] max-w-prose">
          We picked a character niche on purpose. Print-on-demand data for 2026
          says personality-driven, niche brands beat generic designs — single
          strong motifs outsell busy graphics, and apparel plus drinkware carry
          the steadiest margins. So: one crab, a few jokes, ten products.
        </p>
        <p className="mt-4 text-lg text-[color:var(--muted-foreground)] max-w-prose">
          Every design is drawn in code, printed to order, and shipped under our
          label. No warehouse, no bulk orders, no leftovers.
        </p>
      </div>
      <div className="reveal grid grid-cols-2 gap-4">
        <div className="bg-orange-brand text-[color:var(--peach)] rounded-3xl p-6">
          <p className="font-display font-extrabold text-4xl">25%</p>
          <p className="text-sm mt-1">annual POD market growth</p>
        </div>
        <div className="bg-pink-soft text-teal-brand rounded-3xl p-6">
          <p className="font-display font-extrabold text-3xl sm:text-4xl whitespace-nowrap">35–50%</p>
          <p className="text-sm mt-1">gross margin per item here</p>
        </div>
        <div className="bg-sand text-teal-brand rounded-3xl p-6">
          <p className="font-display font-extrabold text-4xl">0</p>
          <p className="text-sm mt-1">units of inventory held</p>
        </div>
        <div className="bg-white text-teal-brand rounded-3xl p-6">
          <p className="font-display font-extrabold text-4xl">10</p>
          <p className="text-sm mt-1">products, all made-to-order</p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-teal-brand text-[color:var(--peach)] border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display font-extrabold uppercase text-2xl">Mr Crabb</p>
          <p className="text-sm text-[color:var(--sand)] mt-1">
            Salty merch, printed on demand. © 2026 Mr Crabb Supply Co.
          </p>
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#shop" className="hover:text-pink-soft transition-colors">Shop</a>
          <a href="#pipeline" className="hover:text-pink-soft transition-colors">How it works</a>
          <a href="#top" className="hover:text-pink-soft transition-colors">Back to top</a>
        </nav>
      </div>
    </footer>
  )
}
