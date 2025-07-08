import { Button } from "~/components/ui/button"
import { heroData } from "../data/heroData"
import { typography } from "../tokens/typography"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="bg-card/90 backdrop-blur-md rounded-xl p-8 max-w-2xl text-center space-y-6 shadow-lg text-foreground transition-colors duration-300">
        <h1 className={typography.title}>{heroData.title}</h1>
        <p className={typography.subtitle}>{heroData.subtitle}</p>
          <div className="bg-muted/50 p-6 rounded-lg w-full max-w-md mx-auto space-y-4">
            <p className={typography.text}>{heroData.text1}</p>
            <p className={typography.text}>{heroData.text2}</p>
          </div>
        <Button asChild className="px-8 py-4 text-lg font-semibold"> 
          <a href={heroData.ctaLink}>{heroData.ctaText}</a>
        </Button>
      </div>
    </section>
  )
}
