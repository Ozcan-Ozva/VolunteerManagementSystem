import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navigation: NavItem[] = [
    {
        title: 'Profile',
        icon_active: 'add',
        icon_inactive: 'man',
        route: '/home/profile',
    },
    {
        title: 'Dash',
        icon_active: 'add',
        icon_inactive: 'man',
        route: '/home/dashboard',
    },
    {
        title: 'Projects',
        icon_active: 'add',
        icon_inactive: 'man',
        route: '/home/projects',
    },
    {
        title: 'Job Market',
        icon_active: 'add',
        icon_inactive: 'man',
        route: '/home/financials/jobs',
    },
    {
        title: 'CRM',
        icon_active: 'add',
        icon_inactive: 'man',
        route: '/home/financials/crm',
    },
    {
        title: 'Financials',
        icon_active: 'add',
        icon_inactive: 'man',
        route: '/home/financials',
    },
    {
        title: 'Organization',
        icon_active: 'add',
        icon_inactive: 'man',
        route: '/home/organizations',
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
type NavItem = {
  icon_active: string;
  icon_inactive: string;
  route: string;
  title: string;
};
