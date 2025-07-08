"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registrationSchema } from "../data/registrationSchema"
import type { RegistrationInput } from "../data/registrationSchema"

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

export function RegistrationForm() {
  const form = useForm<RegistrationInput>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      phone: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  })

  const onSubmit = (values: RegistrationInput) => {
    console.log("✅ Registration submitted:", values)
    // TODO: connect to backend or mutation
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {[
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone", type: "text" },
          { name: "password", label: "Password", type: "password" },
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

        <Button type="submit" className="w-full">
          Join us
        </Button>
      </form>
    </Form>
  )
}
