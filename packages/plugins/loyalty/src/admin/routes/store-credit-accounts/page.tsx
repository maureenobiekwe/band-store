import { defineRouteConfig } from "@band-store/admin-sdk"
import { LayoutComposer } from "@band-store/dashboard/components"
import { Toaster } from "@band-store/ui"
import StoreCreditIcon from "../../components/icons/store-credit-icon"
import { StoreCreditAccountsTable } from "./components/store-credit-accounts-table/table"

const StoreCreditAccountsPage = () => {
  return (
    <>
      <LayoutComposer
        widgetsZonePrefix="store_credit_account.list"
        preferredLayoutId="core:single-column"
        sections={{
          main: (
            <LayoutComposer.Entry id="StoreCreditAccountsTable">
              <StoreCreditAccountsTable />
            </LayoutComposer.Entry>
          ),
        }}
      />

      <Toaster />
    </>
  )
}

export const config = defineRouteConfig({
  label: "Store Credits",
  icon: StoreCreditIcon,
  permissions: ["store_credit_account:read"],
})

export default StoreCreditAccountsPage
