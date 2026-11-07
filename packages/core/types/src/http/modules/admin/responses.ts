export interface AdminModule {
  /**
   * The module's key, such as `rbac` or a custom module's name.
   */
  key: string
}

export interface AdminModulesListResponse {
  /**
   * The modules installed in the BandStore application, excluding link modules.
   */
  modules: AdminModule[]
}
