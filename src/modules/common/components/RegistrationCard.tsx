"use client"

import { useRegister } from "../../registration/hooks/useRegister"
import { RegistrationForm } from "../../registration/components/RegistrationForm"

type RegistrationCardProps = {
  onSuccess?: (args: { name?: string; alreadyRegistered: boolean }) => void
}

export function RegistrationCard({ onSuccess }: RegistrationCardProps) {
  const { form, onSubmit, loading } = useRegister({ onSuccess })

  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-semibold text-center">Interested? Join us!</h2>
      <RegistrationForm form={form} onSubmit={onSubmit} loading={loading} />
    </div>
  )
}
