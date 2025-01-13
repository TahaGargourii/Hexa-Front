import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-xl font-bold text-primary">
            HexaGrid
          </Link>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4">
          <Link href="/products" className="text-foreground/80 hover:text-primary transition-colors">Products</Link>
          <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="mt-4 md:mt-0 text-foreground/60">
          © 2023 HexaGrid. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

