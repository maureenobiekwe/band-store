import { ModuleProvider, Modules } from "@band-store/framework/utils"
import { AdyenProviderService } from "./services"

const services = [AdyenProviderService]

export default ModuleProvider(Modules.PAYMENT, {
  services,
})
