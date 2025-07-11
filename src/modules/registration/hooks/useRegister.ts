"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "~/utils/api"
import { registrationSchema, type RegistrationInput } from "../data/registrationSchema"

type UseRegisterProps = {
  onSuccess?: (args: { name?: string; alreadyRegistered: boolean }) => void
  onError?: (message?: string) => void
}

export function useRegister({ onSuccess, onError }: UseRegisterProps = {}) {
  const form = useForm<RegistrationInput>({
    resolver: zodResolver(registrationSchema),
  })

  const registerMutation = api.auth.registerUser.useMutation({
    onSuccess: (data, variables) => {
      const displayName =
        variables.firstName?.trim() ??
        variables.lastName?.trim() ??
        "Builder"

      const alreadyRegistered = !!data?.alreadyRegistered

      onSuccess?.({ name: displayName, alreadyRegistered })

      form.reset(undefined, {
        keepErrors: false,
        keepDirty: false,
        keepTouched: false,
      })
    },

    onError: (err) => {
      onError?.(err.message || "Registration failed")
    },
  })

  const onSubmit = form.handleSubmit((data) => {
    registerMutation.mutate(data)
  })

  return {
    form,
    onSubmit,
    loading: registerMutation.status === "pending",
  }
}
