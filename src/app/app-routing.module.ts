import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    //canActivateChild: [LoginGuard],
    loadChildren: () =>
      import('./Modules/Authentication/auth.module').then(
        (module) => module.AuthModule
      ),
  },
  {
    path: 'home',
    //canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./Modules/home/home.module').then((module) => module.HomeModule),
    // data: {
    //   breadcrumbs: breadcrumbs.home,
    // },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
