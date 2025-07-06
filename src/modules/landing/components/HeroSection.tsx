import { Button } from "~/components/ui/button"
import { heroData } from "../data/heroData"
import { typography } from "../tokens/typography"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 max-w-2xl text-center space-y-6 shadow-lg">
        <h1 className={typography.title}>{heroData.title}</h1>
        <p className={typography.subtitle}>{heroData.subtitle}</p>
        <Button asChild>
          <a href={heroData.ctaLink}>{heroData.ctaText}</a>
        </Button>
      </div>
    </section>
  )
}
