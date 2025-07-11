"use client"

import { useState } from "react"
import { LandingPage } from "~/modules/landing"
import { RegistrationCard } from "../modules/common/components/RegistrationCard"
import { SuccessCard } from "../modules/common/components/SuccessCard"

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [already, setAlready] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12">
      <div className="w-full max-w-xl bg-white/70 shadow-xl rounded-xl p-8 backdrop-blur-md text-foreground transition-colors duration-300 space-y-6">
        <LandingPage />
        {submitted ? (
          <SuccessCard name={name} alreadyRegistered={already} />
        ) : (
          <RegistrationCard
            onSuccess={({ name, alreadyRegistered }) => {
              setName(name ?? "")
              setAlready(alreadyRegistered)
              setSubmitted(true)
            }}
          />
        )}
      </div>
    </div>
  )
}
