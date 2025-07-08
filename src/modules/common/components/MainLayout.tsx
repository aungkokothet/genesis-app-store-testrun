// src/modules/common/components/MainLayout.tsx
import { Navbar } from "./Navbar"
import { FooterSection } from "./Footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/background.jpg')`,
      }}
    >
      {/* Uses theme tokens for adaptive styling */}
      <div className="bg-background/40 text-foreground transition-colors duration-300 w-full min-h-screen">
        <Navbar />
        <main className="pt-20 pb-12">{children}</main>
        <FooterSection />
      </div>
    </div>
  )
}
