import { CrabMark, WavyUnderline } from '@/components/CrabMark'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-[3fr_2fr] gap-10 items-center">
        <div className="reveal">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral mb-4">
            Coastal merch · printed on demand · zero inventory
          </p>
          <h1 className="font-display font-extrabold uppercase leading-[0.95] text-5xl sm:text-7xl">
            Stay
            <span className="relative inline-block mx-3 text-coral">
              salty
              <WavyUnderline className="absolute left-0 -bottom-2 w-full h-3 text-orange-brand" />
            </span>
            <br />
            my friends.
          </h1>
          <p className="mt-6 max-w-md text-lg text-[color:var(--muted-foreground)]">
            Crab-branded tees, hoodies and gear for people who pinch back. Every
            order is printed and shipped on demand — we never touch a box.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#shop"
              className="inline-flex items-center rounded-full bg-coral text-[color:var(--peach)] px-7 py-3.5 font-bold text-base hover:bg-[color:var(--coral-deep)] transition-colors cursor-pointer min-h-[44px]"
            >
              Shop the drop
            </a>
            <a
              href="#pipeline"
              className="inline-flex items-center rounded-full bg-teal-brand text-[color:var(--peach)] px-7 py-3.5 font-bold text-base hover:bg-[color:var(--teal-deep)] transition-colors cursor-pointer min-h-[44px]"
            >
              How it works
            </a>
          </div>
        </div>
        <div className="reveal relative">
          <div className="bg-pink-soft rounded-[2rem] rotate-2 p-10 sm:p-14 shadow-sm">
            <CrabMark className="w-full max-w-xs mx-auto text-coral" />
            <p className="font-serif-accent italic text-center mt-4 text-[color:var(--teal)]">
              “Born grumpy. Worn proudly.”
            </p>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-orange-brand text-[color:var(--peach)] rounded-full px-5 py-2 text-sm font-bold -rotate-6 shadow">
            Free shipping over $50
          </div>
        </div>
      </div>
    </section>
  )
}
