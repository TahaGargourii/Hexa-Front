import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Zap, Shield, BarChart } from 'lucide-react'

const features = [
  {
    title: "Quantum Speed",
    description: "Our AI-powered platform processes tasks at light speed, ensuring instant results.",
    icon: Zap
  },
  {
    title: "Unbreakable Security",
    description: "Advanced encryption and blockchain technology keep your data fortress impenetrable.",
    icon: Shield
  },
  {
    title: "Predictive Analytics",
    description: "Harness the power of machine learning to forecast trends and make data-driven decisions.",
    icon: BarChart
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Futuristic Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-secondary/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
                <CardDescription className="text-foreground/70">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

