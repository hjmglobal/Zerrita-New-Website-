import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[url('/abstract-business-pattern.png')] opacity-5 bg-cover bg-center" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Bridging Digital Commerce with Real-World Business
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
            Zerrita LLC specializes in ecommerce trade and comprehensive business solutions, delivering excellence in
            both digital and physical commerce operations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
