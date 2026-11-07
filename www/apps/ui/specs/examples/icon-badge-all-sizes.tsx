import { IconBadge } from "@band-store/ui"
import { BuildingTax } from "@band-store/icons"

export default function IconBadgeAllSizes() {
  return (
    <div className="flex gap-3 items-center">
      <IconBadge size="base">
        <BuildingTax />
      </IconBadge>
      <IconBadge size="large">
        <BuildingTax />
      </IconBadge>
    </div>
  )
}
