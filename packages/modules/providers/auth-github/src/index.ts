import { ModuleProvider, Modules } from "@band-store/framework/utils"
import { GithubAuthService } from "./services/github"

const services = [GithubAuthService]

export default ModuleProvider(Modules.AUTH, {
  services,
})
