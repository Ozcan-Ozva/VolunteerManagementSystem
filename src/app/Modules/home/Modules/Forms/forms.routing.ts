import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HumanResourceFormsManagementComponent } from "./Container/human-resource-forms-management/human-resource-forms-management.component";
import { VolunteerMangerFormsManagementComponent } from "./Container/volunteer-manger-forms-management/volunteer-manger-forms-management.component";

const routes: Routes = [
    {
        path: '',
        component: HumanResourceFormsManagementComponent,
    },
    {
        path: 'volunteer-manager',
        component: VolunteerMangerFormsManagementComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FormsRouting {}
