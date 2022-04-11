import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


// const breadcrumbs: Record<string, BreadcrumbsConfig> = {
//     projects: {
//         display: 'Projects',
//         redirect: '.',
//     },
//     dashboard: {
//         display: 'Dashboard',
//         redirect: '.',
//     },
//     financials: {
//         display: 'Financials',
//         redirect: '.',
//     },
//     goalsAndPaths: {
//         display: 'Goals',
//         redirect: '.',
//     },
//     profile: {
//         display: 'Profile',
//         redirect: '.',
//     },
//     chats: {
//         display: 'Chats',
//         redirect: '.',
//     },
//     organizations: {
//         display: 'Organizations',
//         redirect: '.',
//     },
//     newsfeed: {
//         display: 'Newsfeed',
//         redirect: '.',
//     },
// };

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'forms',
                loadChildren: () =>
                    import('./Modules/Forms/forms.module').then((module) => module.FormsModule),
            },
            {
                path: 'permissions-and-roles',
                loadChildren: () =>
                    import('./Modules/PermissionsAndRoles/permissions-and-role.module').then((module) => module.PermissionsAndRolesModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class HomeRouting {}
