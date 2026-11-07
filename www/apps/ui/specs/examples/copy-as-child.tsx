import { PlusMini } from "@band-store/icons"
import { Copy, IconButton, Text } from "@band-store/ui"

export default function CopyAsChild() {
  return (
    <div className="flex items-center gap-x-2">
      <Text>Copy command</Text>
      <Copy content="yarn add @band-store/ui" asChild>
        <IconButton>
          <PlusMini />
        </IconButton>
      </Copy>
    </div>
  )
}
