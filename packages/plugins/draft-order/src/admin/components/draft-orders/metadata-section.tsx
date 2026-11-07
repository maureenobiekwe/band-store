import { usePermissions } from "@band-store/dashboard/hooks"
import { ArrowUpRightOnBox } from "@band-store/icons"
import { HttpTypes } from "@band-store/types"
import { Badge, Container, Heading, IconButton } from "@band-store/ui"
import { Link } from "react-router-dom"
import { EDIT_DRAFT_ORDER_PERMISSIONS } from "../../lib/permissions"

interface MetadataSectionProps {
  order: HttpTypes.AdminOrder
}

export const MetadataSection = ({ order }: MetadataSectionProps) => {
  const { hasAllPermissions } = usePermissions()
  const canEdit = hasAllPermissions(EDIT_DRAFT_ORDER_PERMISSIONS)

  return (
    <Container className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Heading level="h2">Metadata</Heading>
        <Badge size="2xsmall" rounded="full">
          {Object.keys(order.metadata || {}).length} keys
        </Badge>
      </div>
      {canEdit && (
        <IconButton
          variant="transparent"
          size="small"
          className="text-ui-fg-muted hover:text-ui-fg-subtle"
          asChild
        >
          <Link to="metadata">
            <ArrowUpRightOnBox />
          </Link>
        </IconButton>
      )}
    </Container>
  )
}
