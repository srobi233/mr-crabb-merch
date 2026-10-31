export type Product = {
  id: string
  name: string
  tagline: string
  category: 'apparel' | 'drinkware' | 'accessories' | 'home'
  price: number // retail USD
  cost: number // POD supplier cost + avg shipping, USD
  supplier: 'Printify' | 'Printful'
  sku: string // supplier catalog SKU placeholder
  emojiArt: 'tee' | 'hoodie' | 'mug' | 'tote' | 'cap' | 'sticker' | 'poster' | 'towel' | 'case' | 'kids'
  badge?: string
  stripePaymentLink?: string // filled when Stripe Payment Link is created
}

// Pricing rule: retail ≈ (cost + shipping) × 2 → 35–50% gross margin after fees.
// Costs are current Printify/Printful catalog midpoints; verify before publishing listings.
export const products: Product[] = [
  {
    id: 'crab-tee',
    name: 'Classic Crabb Tee',
    tagline: 'The one that started it. Heavyweight cotton, front-claw print.',
    category: 'apparel',
    price: 28,
    cost: 13.5,
    supplier: 'Printify',
    sku: 'PFY-BELLA3001-CRAB',
    emojiArt: 'tee',
    badge: 'Best seller',
  },
  {
    id: 'salty-hoodie',
    name: 'Salty & Crabby Hoodie',
    tagline: 'Fleece-lined, embroidered claw. For mornings that need a pinch.',
    category: 'apparel',
    price: 54,
    cost: 27,
    supplier: 'Printful',
    sku: 'PFD-G18500-SALTY',
    emojiArt: 'hoodie',
    badge: 'Premium',
  },
  {
    id: 'lil-crabb-tee',
    name: 'Lil’ Crabb Kids Tee',
    tagline: 'Matching mini-me edition. Soft ring-spun cotton.',
    category: 'apparel',
    price: 24,
    cost: 11,
    supplier: 'Printify',
    sku: 'PFY-BELLA3001Y-LIL',
    emojiArt: 'kids',
  },
  {
    id: 'claw-mug',
    name: 'Claw Mug 11oz',
    tagline: 'Coffee first, pinch later. Dishwasher-safe ceramic.',
    category: 'drinkware',
    price: 19,
    cost: 8.5,
    supplier: 'Printify',
    sku: 'PFY-MUG11-CLAW',
    emojiArt: 'mug',
    badge: 'Loss leader',
  },
  {
    id: 'tide-tote',
    name: 'Tide Tote',
    tagline: 'Beach-run canvas tote. Fits a towel, a novel, and snacks.',
    category: 'accessories',
    price: 24,
    cost: 10,
    supplier: 'Printify',
    sku: 'PFY-TOTE-TIDE',
    emojiArt: 'tote',
  },
  {
    id: 'crabb-cap',
    name: 'Crabb Cap',
    tagline: 'Embroidered dad cap, adjustable strap, sun-faded coral.',
    category: 'accessories',
    price: 32,
    cost: 15,
    supplier: 'Printful',
    sku: 'PFD-DADCAP-CRABB',
    emojiArt: 'cap',
  },
  {
    id: 'sticker-pack',
    name: 'Crabb Sticker Pack ×5',
    tagline: 'Vinyl, waterproof. Laptops, coolers, kayaks — anywhere.',
    category: 'accessories',
    price: 9,
    cost: 3.5,
    supplier: 'Printify',
    sku: 'PFY-STICK5-PACK',
    emojiArt: 'sticker',
    badge: 'Impulse buy',
  },
  {
    id: 'shed-poster',
    name: '“Shed Your Shell” Print',
    tagline: 'Matte 12×16 wall print. Growth mindset, crustacean edition.',
    category: 'home',
    price: 26,
    cost: 9,
    supplier: 'Printful',
    sku: 'PFD-POSTER1216-SHED',
    emojiArt: 'poster',
  },
  {
    id: 'shore-towel',
    name: 'Shore Thing Beach Towel',
    tagline: '30×60 velour towel. Sand-resistant, complaint-prone.',
    category: 'home',
    price: 42,
    cost: 20,
    supplier: 'Printify',
    sku: 'PFY-TOWEL3060-SHORE',
    emojiArt: 'towel',
  },
  {
    id: 'claw-case',
    name: 'Claw Phone Case',
    tagline: 'Tough case, iPhone + Samsung. Drop-tested by actual claws.',
    category: 'accessories',
    price: 26,
    cost: 11,
    supplier: 'Printify',
    sku: 'PFY-CASE-CLAW',
    emojiArt: 'case',
  },
]

export const margin = (p: Product) => Math.round(((p.price - p.cost) / p.price) * 100)

export const categories = [
  { id: 'all', label: 'Everything' },
  { id: 'apparel', label: 'Apparel' },
  { id: 'drinkware', label: 'Drinkware' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'home', label: 'Home' },
] as const
