export interface FeatureDefinition {
  name: string;
  //rolePermissions: RolePermissions;
  links?: FeatureLinks;
}

export interface FeatureLinks {
  domain?: any[];
}
