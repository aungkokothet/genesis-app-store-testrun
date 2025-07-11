export const successCardContent = {
  new: {
    title: (name?: string) => `Thanks, ${name?.trim() || "Builder"}!`,
    message: "We’ve received your contact info. You’ll hear from us soon.",
  },
  already: {
    title: (name?: string) => `Welcome back, ${name?.trim() || "Builder"}!`,
    message: "You're already in our system. We’ll keep you posted.",
  },
}
