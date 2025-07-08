import { db } from "~/server/db"
import { registrationSchema, type RegistrationInput } from "~/modules/registration/data/registrationSchema"

export async function registerUser(input: RegistrationInput) {
  const { email, phone, firstName, lastName } = input

  const existingUser = await db.user.findFirst({
    where: {
      OR: [{ email }, { phone }],
    },
  })

  if (existingUser) {
    return {
      success: true,
      userId: existingUser.id,
      alreadyRegistered: true,
    }
  }

  const user = await db.user.create({
    data: {
      email,
      phone,
      firstName,
      lastName,
      userType: "buyer",
      role: null,
    },
  })

  return {
    success: true,
    userId: user.id,
    alreadyRegistered: false,
  }
}
