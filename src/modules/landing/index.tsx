import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { FooterSection } from "./components/Footer"

export function LandingPage() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/background.jpg')`, // ← make sure this image exists
      }}
    >
      {/* This overlay applies blur + transparency */}
       <div className="bg-white/60 w-full min-h-screen">
        <Navbar />
        <HeroSection />
         <FooterSection />
        {/* ⏭️ Add other sections below here step by step */}
      </div>
    </div>
  )
}
