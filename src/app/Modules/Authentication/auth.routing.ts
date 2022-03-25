import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //     path: '',
    //     component: LoginViewComponent,
    // },
    // {
    //     path: 'dev',
    //     component: DevelopmentViewComponent
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }
