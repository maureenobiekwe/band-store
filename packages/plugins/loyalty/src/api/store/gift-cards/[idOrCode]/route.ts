import type {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework";
import {
  ContainerRegistrationKeys,
  BandStoreError,
} from "@band-store/framework/utils";
import { StoreGetGiftCardParams } from "../../../../types";

export const GET = async (
  req: Authenticatedband-storeRequest<StoreGetGiftCardParams>,
  res: BandStoreResponse
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);
  const { idOrCode: code } = req.params;

  if (!code?.length) {
    throw new BandStoreError(
      BandStoreError.Types.INVALID_ARGUMENT,
      "Code is required"
    );
  }

  const {
    data: [gift_card],
  } = await query.graph({
    entity: "gift_cards",
    fields: req.queryConfig.fields,
    filters: {
      code,
    },
  });

  if (!gift_card) {
    throw new BandStoreError(BandStoreError.Types.NOT_FOUND, "Gift card not found");
  }

  res.json({ gift_card });
};
