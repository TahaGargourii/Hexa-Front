import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "$19.99",
    features: ["5 AI Assistants", "50GB Quantum Storage", "Basic Predictive Analytics"],
  },
  {
    name: "Pro",
    price: "$49.99",
    features: ["25 AI Assistants", "500GB Quantum Storage", "Advanced Predictive Analytics", "Priority Quantum Support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited AI Assistants", "Unlimited Quantum Storage", "Real-time Predictive Analytics", "Dedicated Quantum Engineer"],
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Quantum Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold text-primary">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

