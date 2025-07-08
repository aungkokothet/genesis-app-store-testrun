"use client"

import { useRegister } from "../../modules/registration/hooks/useRegister"
import { RegistrationForm } from "../../modules/registration/components/RegistrationForm"

export function RegistrationCard() {
  const { form, onSubmit, loading } = useRegister()

  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-semibold text-center">Interested? Join us!</h2>
      <RegistrationForm form={form} onSubmit={onSubmit} loading={loading} />
    </div>
  )
}
