import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          HexaGrid
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
      </div>
    </header>
  )
}

