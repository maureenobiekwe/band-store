import { IconButton } from "@band-store/ui"
import { PlusMini } from "@band-store/icons"

export default function IconButtonAllVariants() {
  return (
    <div className="flex gap-2">
      <IconButton variant="primary">
        <PlusMini />
      </IconButton>
      <IconButton variant="transparent">
        <PlusMini />
      </IconButton>
    </div>
  )
}
