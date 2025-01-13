import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Step into the Future?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of visionaries and revolutionize your business today.
        </p>
        <Button size="lg" className="bg-background text-primary hover:bg-background/90 rounded-full px-8 py-3 text-lg">
          Launch Your Future
        </Button>
      </div>
    </section>
  )
}

