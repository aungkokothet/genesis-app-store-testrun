"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { type UseFormReturn } from "react-hook-form"
import type { RegistrationInput } from "../data/registrationSchema"

type RegistrationFormProps = {
  form: UseFormReturn<RegistrationInput>
  onSubmit: () => void
  loading: boolean
}

export function RegistrationForm({ form, onSubmit, loading }: RegistrationFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        {[ 
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone", type: "text" },
          { name: "firstName", label: "First Name (optional)", type: "text" },
          { name: "lastName", label: "Last Name (optional)", type: "text" },
        ].map(({ name, label, type }) => (
          <FormField
            key={name}
            control={form.control}
            name={name as keyof RegistrationInput}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input type={type} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Joining..." : "Join us"}
        </Button>
      </form>
    </Form>
  )
}
