import { InformationCircleSolid } from "@band-store/icons"
import { Tooltip } from "@band-store/ui"

export default function TooltipDemo() {
  return (
    <Tooltip content="The quick brown fox jumps over the lazy dog.">
      <InformationCircleSolid />
    </Tooltip>
  )
}
