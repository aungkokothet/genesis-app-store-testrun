import { heroData } from "../data/heroData"
import { typography } from "../tokens/typography"

export function HeroSection() {
  return (
    <div className="text-center space-y-6">
      <h1 className={typography.title}>{heroData.title}</h1>
      <p className={typography.subtitle}>{heroData.subtitle}</p>

      <div className="bg-black/20 p-6 rounded-lg w-full max-w-md mx-auto space-y-4 text-white">
        <p className={typography.text}>{heroData.text1}</p>
        <p className={typography.text}>{heroData.text2}</p>
      </div>
    </div>
  )
}
