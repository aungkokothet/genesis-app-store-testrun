"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "~/utils/api"
import { registrationSchema, type RegistrationInput } from "../data/registrationSchema"
import { toast } from "sonner"

export function useRegister() {
  const router = useRouter()

  const form = useForm<RegistrationInput>({
    resolver: zodResolver(registrationSchema),
  })

  const registerMutation = api.auth.registerUser.useMutation({
    onSuccess: (data, variables) => {
      const already = data?.alreadyRegistered

      const displayName =
        variables.firstName?.trim() ??
        variables.lastName?.trim() ??
        "Builder"

      if (already) {
        toast.success(`Hey ${displayName}, you're already recognized as a Builder`)
      } else {
        toast.success(`Welcome ${displayName} 🎉 You're now part of the Builders' Stack`)
      }

      form.reset()

      setTimeout(() => {
        router.push("/")
      }, 1500)
    },

    onError: (err) => {
      toast.error(err.message || "Registration failed")
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
