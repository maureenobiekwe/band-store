import { PlusMini } from "@band-store/icons"
import { IconButton } from "@band-store/ui"

export default function IconButtonLoading() {
  return (
    <IconButton isLoading className="relative">
      <PlusMini />
    </IconButton>
  )
}
