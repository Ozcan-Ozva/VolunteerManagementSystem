import { NgModule } from '@angular/core';
import { RolesViewModule } from './Container/roles-view/roles-view.module';
import { PermissionsAndRolesModuleRouting } from './permissions-and-roles.routing';
import { ManagerAccountManagementComponent } from './Container/manager-account-management/manager-account-management.component';
import { ManagerAccountManagementViewModule } from './Container/manager-account-management/manager-account-management.module';

@NgModule({
    imports: [PermissionsAndRolesModuleRouting, RolesViewModule, ManagerAccountManagementViewModule],
    declarations: [
  ],
    providers: [],
})
export class PermissionsAndRolesModule {}
