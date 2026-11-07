import { defineRouteConfig } from "@band-store/admin-sdk"
import { LayoutComposer } from "@band-store/dashboard/components"
import { Toaster } from "@band-store/ui"
import { GiftCardProductsTable } from "./components/gift-card-products-table/gift-card-products-table"

const GiftCardProductsPage = () => {
  return (
    <>
      <LayoutComposer
        widgetsZonePrefix="gift_card_product.list"
        preferredLayoutId="core:single-column"
        sections={{
          main: (
            <LayoutComposer.Entry id="GiftCardProductsTable">
              <GiftCardProductsTable />
            </LayoutComposer.Entry>
          ),
        }}
      />

      <Toaster />
    </>
  )
}

export const config = defineRouteConfig({
  label: "Gift Card Products",
  permissions: ["product:read"],
})

export default GiftCardProductsPage
