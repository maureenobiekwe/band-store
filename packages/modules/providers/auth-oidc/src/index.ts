import { ModuleProvider, Modules } from "@band-store/framework/utils"
import { OidcAuthService } from "./services/oidc"

const services = [OidcAuthService]

export default ModuleProvider(Modules.AUTH, {
  services,
})
