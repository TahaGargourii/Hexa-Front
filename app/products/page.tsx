import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const products = [
  {
    name: "HexaCore",
    description: "Our flagship AI-powered data processing engine.",
  },
  {
    name: "GridSense",
    description: "Advanced IoT sensor network for smart cities.",
  },
  {
    name: "QuantumLink",
    description: "Secure quantum encryption for data transmission.",
  },
]

export default function Products() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="bg-secondary/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-foreground">{product.name}</CardTitle>
              <CardDescription className="text-foreground/70">{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

