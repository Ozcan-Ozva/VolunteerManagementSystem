import { NgModule } from '@angular/core';
import { RolesViewModule } from './Container/roles-view/roles-view.module';
import { PermissionsAndRolesModuleRouting } from './permissions-and-roles.routing';

@NgModule({
    imports: [PermissionsAndRolesModuleRouting, RolesViewModule],
    declarations: [
  ],
    providers: [],
})
export class PermissionsAndRolesModule {}
