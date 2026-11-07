import { ModuleProvider, Modules } from "@band-store/framework/utils"
import { GoogleAuthService } from "./services/google"

const services = [GoogleAuthService]

export default ModuleProvider(Modules.AUTH, {
  services,
})
