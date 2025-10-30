import { Card } from "@/components/ui/card"
import { Store, TrendingUp, Users } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Store,
      title: "Ecommerce Excellence",
      description: "Comprehensive online trade solutions that drive growth and maximize digital presence.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Strategic business operations that scale with your ambitions and market demands.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Dedicated partnership approach ensuring your success is our primary objective.",
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">What We Do</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Zerrita LLC combines digital innovation with traditional business expertise to deliver comprehensive
            commerce solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
