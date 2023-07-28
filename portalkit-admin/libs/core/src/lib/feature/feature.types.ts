export interface FeatureDefinition {
  name: string;
  //rolePermissions: RolePermissions;
  links: FeatureLinks;
  sideNavMenu: RootMenuItem,
  sideNavSubMenu: Array<MenuItem>
}

export interface FeatureLinks {
  domain: any[];
}
export interface RootMenuItem {
  label: string,
  icon: string,
}
export interface MenuItem {
  label: string,
  routerLink: any[]
}
