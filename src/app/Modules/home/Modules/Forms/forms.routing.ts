import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HumanResourceFormsManagementComponent } from "./Container/human-resource-forms-management/human-resource-forms-management.component";

const routes: Routes = [
    {
        path: '',
        component: HumanResourceFormsManagementComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FormsRouting {}
