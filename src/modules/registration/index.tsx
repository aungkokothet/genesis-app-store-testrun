// src/modules/registration/index.tsx
import { RegistrationForm } from "~/modules/registration/components/RegistrationForm"

export default function RegistrationPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4">
      <div className="w-full max-w-md shadow-lg rounded-xl p-6 backdrop-blur-md bg-white/80">
        <h1 className="text-2xl font-bold mb-4 text-center">Leave your info please</h1>
        <RegistrationForm />
      </div>
    </div>
  )
}
