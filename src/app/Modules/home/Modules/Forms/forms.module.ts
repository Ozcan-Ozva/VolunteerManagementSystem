import { NgModule } from '@angular/core';
import { HumanResourceFormsManagementViewModule } from './Container/human-resource-forms-management/human-resource-forms-management.module';
import { FormsRouting } from './forms.routing';

@NgModule({
    imports: [FormsRouting ,HumanResourceFormsManagementViewModule],
    declarations: [],
    providers: [],
})
export class FormsModule {}
