import { LandingPage } from "~/modules/landing"
import { RegistrationCard } from "../modules/common/components/RegistrationCard"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12">
      <div className="w-full max-w-xl bg-white/70 shadow-xl rounded-xl p-8 backdrop-blur-md text-foreground transition-colors duration-300 space-y-6">
        <LandingPage />
        <RegistrationCard />
      </div>
    </div>
  )
}
