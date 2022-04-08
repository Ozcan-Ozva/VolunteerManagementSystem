import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing';
import { LoginViewComponent } from './Containers/login-view/login-view.component';
import { RegisterViewComponent } from './Containers/register-view/register-view.component';

@NgModule({
    imports: [CommonModule, AuthRoutingModule],
    declarations: [
    LoginViewComponent,
    RegisterViewComponent
  ],
})
export class AuthModule { }
