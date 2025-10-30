import { Card } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Ready to discuss your business needs? Contact us today.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <Card className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-card-foreground">Email</h3>
            <p className="mt-3 text-muted-foreground">
              <a href="mailto:hjm@zerritallc.com" className="hover:text-accent transition-colors">
                hjm@zerritallc.com
              </a>
            </p>
          </Card>
          <Card className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-card-foreground">Location</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              6101 Palm Trace Landings Dr
              <br />
              Davie, Florida
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
