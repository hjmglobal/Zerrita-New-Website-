import { Card } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      number: "01",
      title: "Digital Commerce",
      description:
        "End-to-end ecommerce solutions including platform development, optimization, and digital marketing strategies.",
    },
    {
      number: "02",
      title: "Business Operations",
      description:
        "Comprehensive business management services covering logistics, supply chain, and operational excellence.",
    },
    {
      number: "03",
      title: "Strategic Consulting",
      description:
        "Expert guidance on market expansion, business development, and growth strategies for sustainable success.",
    },
  ]

  return (
    <section id="services" className="bg-muted/30 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl space-y-8">
          {services.map((service) => (
            <Card key={service.number} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-bold text-accent/20">{service.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-card-foreground">{service.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
