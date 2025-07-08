import { BrandBlock } from "./BrandBlock"
import { QuickLinks } from "./QuickLinks"
import { SocialLinks } from "./SocialLinks"

export function FooterSection() {
  return (
    <footer className="bg-white/90 text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <BrandBlock />
        <QuickLinks />
        <SocialLinks />
      </div>
    </footer>
  )
}
