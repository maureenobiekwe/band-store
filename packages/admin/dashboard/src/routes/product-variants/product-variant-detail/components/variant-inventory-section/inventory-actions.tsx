import { useTranslation } from "react-i18next"

import { Buildings } from "@band-store/icons"
import { AdminInventoryItem } from "@band-store/types"

import { ActionMenu } from "../../../../../components/common/action-menu"

export const InventoryActions = ({ item }: { item: AdminInventoryItem }) => {
  const { t } = useTranslation()

  return (
    <ActionMenu
      groups={[
        {
          actions: [
            {
              icon: <Buildings />,
              label: t("products.variant.inventory.navigateToItem"),
              to: `/inventory/${item.id}`,
            },
          ],
        },
      ]}
    />
  )
}
