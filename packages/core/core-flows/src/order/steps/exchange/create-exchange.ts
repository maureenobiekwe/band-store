import {
  CreateOrderExchangeDTO,
  IOrderModuleService,
} from "@band-store/framework/types"
import { Modules } from "@band-store/framework/utils"
import { StepResponse, createStep } from "@band-store/framework/workflows-sdk"

export const createOrderExchangesStepId = "create-order-exchanges"
/**
 * This step creates one or more order exchanges.
 */
export const createOrderExchangesStep = createStep(
  createOrderExchangesStepId,
  async (data: CreateOrderExchangeDTO[], { container }) => {
    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    const orderExchanges = await service.createOrderExchanges(data)

    const exchangeIds = orderExchanges.map((exchange) => exchange.id)

    return new StepResponse(orderExchanges, exchangeIds)
  },
  async (exchangeIds, { container }) => {
    if (!exchangeIds) {
      return
    }

    const service = container.resolve<IOrderModuleService>(Modules.ORDER)

    await service.deleteOrderExchanges(exchangeIds)
  }
)
