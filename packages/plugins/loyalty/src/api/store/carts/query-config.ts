import {
  defaultStoreCartFields,
  retrieveTransformQueryConfig as storeCartRetrieveTransformQueryConfig,
} from "@band-store/band-store/api/store/carts/query-config";
import { giftCardRelationAllowedFields } from "../gift-cards/query-config";

export const retrieveTransformQueryConfig = {
  defaults: [...defaultStoreCartFields, "*gift_cards"],
  allowed: [
    ...(storeCartRetrieveTransformQueryConfig.allowed ?? []),
    ...giftCardRelationAllowedFields,
  ],
  isList: false,
};
