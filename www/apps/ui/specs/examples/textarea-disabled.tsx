import { Textarea } from "@band-store/ui"

export default function TextareaDisabled() {
  return (
    <Textarea
      disabled
      placeholder="Disabled textarea"
      aria-label="Disabled textarea"
    />
  )
}
