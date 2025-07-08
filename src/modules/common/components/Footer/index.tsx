import { BrandBlock } from "./BrandBlock"
import { QuickLinks } from "./QuickLinks"
import { SocialLinks } from "./SocialLinks"

export function FooterSection() {
  return (
    <footer className="bg-card/90 text-muted-foreground border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <BrandBlock />
        <QuickLinks />
        <SocialLinks />
      </div>
    </footer>
  )
}

