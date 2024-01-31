import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'ni-tv-2 text-black', class: '' },
    { path: '/perfil-usuario', title: 'Perfil de usuario',  icon:'ni-single-02 text-black', class: '' },
    { path: '/rutinas', title: 'Rutinas',  icon:'ni-calendar-grid-58 text-black', class: '' },
    { path: '/alimentacion', title: 'Alimentación',  icon:'ni-satisfied text-black', class: '' },
    { path: '/tienda', title: 'Tienda',  icon:'ni-shop text-black', class: '' },
    { path: '/maps', title: 'Mapa',  icon:'ni-pin-3 text-black', class: '' },
    { path: '/login', title: 'Accede a tu perfil',  icon:'ni-lock-circle-open text-black', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
