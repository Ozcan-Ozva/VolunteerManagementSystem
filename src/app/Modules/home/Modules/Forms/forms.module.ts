import { NgModule } from '@angular/core';
import { HumanResourceFormsManagementViewModule } from './Container/human-resource-forms-management/human-resource-forms-management.module';
import { VolunteerMangerFormsManagementViewModule } from './Container/volunteer-manger-forms-management/volunteer-manger-forms-management.module';
import { FormsRouting } from './forms.routing';

@NgModule({
    imports: [FormsRouting ,HumanResourceFormsManagementViewModule, VolunteerMangerFormsManagementViewModule],
    declarations: [
  ],
    providers: [],
})
export class FormsModule {}
