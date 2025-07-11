import { successCardContent } from "../data/successCardData"

type SuccessCardProps = {
  name?: string
  alreadyRegistered?: boolean
}

export function SuccessCard({ name, alreadyRegistered }: SuccessCardProps) {
  const content = alreadyRegistered
    ? successCardContent.already
    : successCardContent.new

  return (
    <div className="w-full text-center space-y-4">
      <h2 className="text-2xl font-semibold">{content.title(name)}</h2>
      <p className="text-muted-foreground">{content.message}</p>
    </div>
  )
}
