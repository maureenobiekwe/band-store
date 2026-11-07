import type {
  Authenticatedband-storeRequest,
  BandStoreResponse,
} from "@band-store/framework";
import { ContainerRegistrationKeys } from "@band-store/framework/utils";

import {
  AdminDebitStoreCreditAccountParams,
  AdminGetStoreCreditAccountsParams,
  AdminStoreCreditAccountResponse,
} from "../../../../../types";
import { debitStoreCreditAccountWorkflow } from "../../../../../workflows/store-credit/workflows/debit-store-credit-account";

export const POST = async (
  req: Authenticatedband-storeRequest<AdminDebitStoreCreditAccountParams>,
  res: BandStoreResponse<AdminStoreCreditAccountResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);
  const { id } = req.params;

  const filters: AdminGetStoreCreditAccountsParams = {
    id,
  };

  await debitStoreCreditAccountWorkflow.run({
    input: {
      account_id: id,
      amount: req.validatedBody.amount,
      note: req.validatedBody.note,
      reference: req.auth_context.actor_type,
      reference_id: req.auth_context.actor_id,
    },
    container: req.scope,
  });

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
