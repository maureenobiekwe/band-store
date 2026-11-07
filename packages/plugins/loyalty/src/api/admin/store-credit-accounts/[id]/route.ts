import type {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework";
import { ContainerRegistrationKeys } from "@band-store/framework/utils";
import {
  AdminGetStoreCreditAccountsParams,
  AdminStoreCreditAccountResponse,
} from "../../../../types";

export const GET = async (
  req: Authenticatedband-storeRequest<null, AdminGetStoreCreditAccountsParams>,
  res: BandStoreResponse<AdminStoreCreditAccountResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);
  const { id } = req.params;

  const filters: AdminGetStoreCreditAccountsParams = {
    id,
  };

  const {
    data: [store_credit_account],
  } = await query.graph(
    {
      entity: "store_credit_account",
      fields: req.queryConfig.fields,
      filters,
    },
    { throwIfKeyNotFound: true }
  );

  res.json({ store_credit_account });
};
