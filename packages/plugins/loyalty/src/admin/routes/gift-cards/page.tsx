import { defineRouteConfig } from "@band-store/admin-sdk"
import { LayoutComposer } from "@band-store/dashboard/components"
import { PermissionGuard } from "@band-store/dashboard/hooks"
import { Toaster } from "@band-store/ui"
import GiftCardIcon from "../../components/icons/gift-card-icon"
import GiftCardProductsSection from "./components/gift-card-products-section"
import { GiftCardsTable } from "./components/gift-cards-table/gift-cards-table"

const GiftCardsPage = () => {
  return (
    <>
      <LayoutComposer
        widgetsZonePrefix="gift_card.list"
        preferredLayoutId="core:two-column"
        sections={{
          main: (
            <LayoutComposer.Entry id="GiftCardsTable">
              <GiftCardsTable />
            </LayoutComposer.Entry>
          ),
          side: (
            <LayoutComposer.Entry id="GiftCardProductsSection">
              <PermissionGuard permission="product:read">
                <GiftCardProductsSection />
              </PermissionGuard>
            </LayoutComposer.Entry>
          ),
        }}
      />

      <Toaster />
    </>
  )
}

export const config = defineRouteConfig({
  label: "Gift Cards",
  icon: GiftCardIcon,
  permissions: ["gift_card:read"],
})

export default GiftCardsPage
