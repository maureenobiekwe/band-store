import type {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework";
import { ContainerRegistrationKeys } from "@band-store/framework/utils";
import { HttpTypes } from "@band-store/framework/types";
import { addStoreCreditsToCartWorkflow } from "../../../../../workflows/carts/workflows/add-store-credits-to-cart";
import { StoreAddStoreCreditsToCart } from "../../../../../types";

export const POST = async (
  req: Authenticatedband-storeRequest<StoreAddStoreCreditsToCart>,
  res: BandStoreResponse<HttpTypes.StoreCartResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY);
  const { id } = req.params;

  await addStoreCreditsToCartWorkflow.run({
    input: {
      cart_id: id,
      ...req.validatedBody,
      customer_id: req.auth_context.actor_id,
    },
    container: req.scope,
  });

  const {
    data: [cart],
  } = await query.graph(
    {
      entity: "cart",
      fields: req.queryConfig.fields,
      filters: { id },
    },
    { throwIfKeyNotFound: true }
  );

  res.json({ cart });
};
