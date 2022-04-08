import { RegisterViewComponent } from './Containers/register-view/register-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './Containers/login-view/login-view.component';

const routes: Routes = [
    {
        path: '',
        component: LoginViewComponent,
    },
    {
        path: 'register',
        component: RegisterViewComponent,
    },
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
