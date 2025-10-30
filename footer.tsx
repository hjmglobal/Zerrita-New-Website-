export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zerrita LLC. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Davie, Florida</p>
        </div>
      </div>
    </footer>
  )
}
