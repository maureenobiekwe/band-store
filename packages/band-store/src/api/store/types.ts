import { BandStoreStoreRequest } from "@band-store/framework/http"
import {
  BandStorePricingContext,
  TaxCalculationContext,
} from "@band-store/framework/types"

export type StoreRequestWithContext<
  Body,
  QueryFields = Record<string, unknown>,
> = BandStoreStoreRequest<Body, QueryFields> & {
  pricingContext?: BandStorePricingContext
  taxContext?: {
    taxLineContext?: TaxCalculationContext
    taxInclusivityContext?: {
      automaticTaxes: boolean
    }
  }
}
