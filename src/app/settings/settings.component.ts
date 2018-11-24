import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  routes: Array<any> = [
    { routeName: 'Profile', routePath: 'profile'},
    { routeName: 'Contact Info', routePath: 'contact'}
  ];
}
