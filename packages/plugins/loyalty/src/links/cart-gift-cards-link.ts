import { defineLink } from "@band-store/framework/utils";
import CartModule from "@band-store/band-store/cart";
import LoyaltyModule from "../modules/loyalty";

export default defineLink(
  { linkable: CartModule.linkable.cart, isList: true },
  {
    linkable: LoyaltyModule.linkable.giftCard,
    isList: true,
  }
);
