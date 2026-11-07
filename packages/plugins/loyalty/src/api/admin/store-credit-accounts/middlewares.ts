import {
  validateAndTransformBody,
  validateAndTransformQuery,
} from "@band-store/framework";
import { authorize } from "@band-store/framework/http";
import { PolicyOperation } from "@band-store/framework/utils";
import { MiddlewareRoute } from "@band-store/band-store";
import {
  listStoreCreditAccountsTransformQueryConfig,
  listStoreCreditAccountTransactionsTransformQueryConfig,
  retrieveStoreCreditAccountTransformQueryConfig,
} from "./query-config";
import {
  AdminCreateStoreCreditAccount,
  AdminCreditStoreCreditAccountParams,
  AdminDebitStoreCreditAccountParams,
  AdminGetStoreCreditAccountsParams,
  AdminGetStoreCreditAccountTransactionsParams,
} from "./validators";

export const adminStoreCreditAccountMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/store-credit-accounts",
    middlewares: [
      authorize([
        {
          resource: "store_credit_account",
          operation: PolicyOperation.read,
        },
      ]),
      validateAndTransformQuery(
        AdminGetStoreCreditAccountsParams,
        listStoreCreditAccountsTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/store-credit-accounts/:id",
    middlewares: [
      authorize([
        {
          resource: "store_credit_account",
          operation: PolicyOperation.read,
        },
      ]),
      validateAndTransformQuery(
        AdminGetStoreCreditAccountsParams,
        retrieveStoreCreditAccountTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/store-credit-accounts/:id/transactions",
    middlewares: [
      authorize([
        {
          resource: "store_credit_account",
          operation: PolicyOperation.read,
        },
      ]),
      validateAndTransformQuery(
        AdminGetStoreCreditAccountTransactionsParams,
        listStoreCreditAccountTransactionsTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/store-credit-accounts/:id/credit",
    middlewares: [
      authorize([
        {
          resource: "store_credit_account",
          operation: PolicyOperation.update,
        },
      ]),
      validateAndTransformBody(AdminCreditStoreCreditAccountParams),
      validateAndTransformQuery(
        AdminGetStoreCreditAccountsParams,
        retrieveStoreCreditAccountTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/store-credit-accounts/:id/debit",
    middlewares: [
      authorize([
        {
          resource: "store_credit_account",
          operation: PolicyOperation.update,
        },
      ]),
      validateAndTransformBody(AdminDebitStoreCreditAccountParams),
      validateAndTransformQuery(
        AdminGetStoreCreditAccountsParams,
        retrieveStoreCreditAccountTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/store-credit-accounts",
    middlewares: [
      authorize([
        {
          resource: "store_credit_account",
          operation: PolicyOperation.create,
        },
      ]),
      validateAndTransformBody(AdminCreateStoreCreditAccount),
      validateAndTransformQuery(
        AdminGetStoreCreditAccountsParams,
        retrieveStoreCreditAccountTransformQueryConfig
      ),
    ],
  },
];
