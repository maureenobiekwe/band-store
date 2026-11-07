import { raw } from "express"
import { z } from "../../../deps/zod"
import { BandStoreNextFunction, BandStoreRequest, BandStoreResponse } from "../../types"
import { defineMiddlewares } from "../../utils/define-middlewares"
import {
  adminRegexMiddlewareMock,
  customersCreateMiddlewareMock,
  customersCreateMiddlewareValidatorMock,
  customersGlobalMiddlewareMock,
  storeGlobalMiddlewareMock,
} from "../mocks"

const customersGlobalMiddleware = (
  req: BandStoreRequest,
  res: BandStoreResponse,
  next: BandStoreNextFunction
) => {
  customersGlobalMiddlewareMock()
  next()
}

const customersCreateMiddleware = (
  req: BandStoreRequest,
  res: BandStoreResponse,
  next: BandStoreNextFunction
) => {
  if (req.additionalDataValidator) {
    customersCreateMiddlewareValidatorMock()
  }
  customersCreateMiddlewareMock()
  next()
}

const storeGlobal = (
  req: BandStoreRequest,
  res: BandStoreResponse,
  next: BandStoreNextFunction
) => {
  storeGlobalMiddlewareMock()
  next()
}

const adminRegexMiddleware = (
  req: BandStoreRequest,
  res: BandStoreResponse,
  next: BandStoreNextFunction
) => {
  adminRegexMiddlewareMock()
  next()
}

const middlewares = defineMiddlewares([
  {
    matcher: "/customers",
    middlewares: [customersGlobalMiddleware],
  },
  {
    method: ["ALL"],
    matcher: "/v1*",
    bodyParser: {
      sizeLimit: "500kb",
    },
    middlewares: [],
  },
  {
    method: "POST",
    matcher: "/customers",
    additionalDataValidator: {
      group_id: z.string(),
    },
    middlewares: [customersCreateMiddleware],
  },
  {
    matcher: "/store/*",
    middlewares: [storeGlobal],
  },
  {
    matcher: /^\/admin(\/.*)?$/,
    middlewares: [adminRegexMiddleware],
  },
  {
    matcher: "/webhooks",
    bodyParser: {
      preserveRawBody: true,
    },
  },
  {
    matcher: "/webhooks/*",
    method: "POST",
    bodyParser: false,
    middlewares: [raw({ type: "application/json" })],
  },
])

export default middlewares
