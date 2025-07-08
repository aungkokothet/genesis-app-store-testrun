"use client"

import { useRegister } from "~/modules/registration/hooks/useRegister"
import { RegistrationForm } from "~/modules/registration/components/RegistrationForm"

export default function RegistrationPage() {
  const { form, onSubmit, loading } = useRegister()

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4">
      <div className="w-full max-w-md shadow-lg rounded-xl p-6 backdrop-blur-md bg-card/80 text-foreground transition-colors duration-300">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Interested? Join us!
        </h1>
        <RegistrationForm form={form} onSubmit={onSubmit} loading={loading} />
      </div>
    </div>
  )
}
