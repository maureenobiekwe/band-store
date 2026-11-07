import { defineLink } from "@band-store/framework/utils";
import OrderModule from "@band-store/band-store/order";
import LoyaltyModule from "../modules/loyalty";

export default defineLink(
  { linkable: OrderModule.linkable.order, isList: true },
  {
    linkable: LoyaltyModule.linkable.giftCard,
    isList: true,
  }
);
