import type {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework";
import { ContainerRegistrationKeys } from "@band-store/framework/utils";
import { updateGiftCardsWorkflow } from "../../../../workflows/gift-cards/workflows/update-gift-cards";
import { AdminGiftCardResponse, AdminUpdateGiftCardParams } from "../../../../types";

export const GET = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse<AdminGiftCardResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);
  const { id } = req.params;

  const {
    data: [gift_card],
  } = await query.graph(
    {
      entity: "gift_cards",
      fields: req.queryConfig.fields,
      filters: { id },
    },
    { throwIfKeyNotFound: true }
  );

  res.json({ gift_card });
};

export const POST = async (
  req: Authenticatedband-storeRequest<AdminUpdateGiftCardParams>,
  res: BandStoreResponse<AdminGiftCardResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);
  const { id } = req.params;

  await query.graph(
    {
      entity: "gift_cards",
      fields: req.queryConfig.fields,
      filters: { id },
    },
    { throwIfKeyNotFound: true }
  );

  await updateGiftCardsWorkflow.run({
    input: [
      {
        id,
        ...req.body,
      },
    ],
  });

  const {
    data: [gift_card],
  } = await query.graph(
    {
      entity: "gift_cards",
      fields: req.queryConfig.fields,
      filters: { id },
    },
    { throwIfKeyNotFound: true }
  );

  res.json({ gift_card });
};
