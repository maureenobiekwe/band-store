import type {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework";
import { ContainerRegistrationKeys } from "@band-store/framework/utils";

export const GET = async (
  req: Authenticatedband-storeRequest,
  res: BandStoreResponse
) => {
  const { id } = req.params;
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

  const { data: giftCardOrders } = await query.graph({
    entity: "order_gift_card",
    fields: ["id", "gift_card_id", "order_id"],
    filters: {
      gift_card_id: id,
    },
  });

  const orderIds = giftCardOrders.map((order) => order.order_id);

  const { data: orders } = await query.graph({
    entity: "order",
    fields: req.queryConfig.fields,
    filters: {
      id: orderIds,
    },
  });

  res.json({
    orders,
  });
};
