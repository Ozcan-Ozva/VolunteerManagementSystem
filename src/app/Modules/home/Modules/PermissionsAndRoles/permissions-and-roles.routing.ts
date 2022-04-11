import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RolesViewComponent } from "./Container/roles-view/roles-view.component";

const routes: Routes = [
    {
        path: '',
        component: RolesViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PermissionsAndRolesModuleRouting {}
