// src/modules/common/components/MainLayout.tsx
import { Navbar } from "./Navbar"
import { FooterSection } from "./Footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('/assets/background.jpg')`,
    }}>
      {/* Optional blur/overlay layer */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-xs" />

      {/* Actual content layer */}
      <div className="relative z-10 w-full min-h-screen text-foreground transition-colors duration-300">
        <Navbar />
        <main className="pt-20 pb-12">{children}</main>
        <FooterSection />
      </div>
    </div>
  )
}
