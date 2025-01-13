import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          The Future of Workflow
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-foreground/80">
          Experience tomorrow's productivity today with our cutting-edge SaaS solution.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-lg">
          Start Your Journey
        </Button>
      </div>
    </section>
  )
}

