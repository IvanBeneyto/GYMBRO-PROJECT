import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AlimentacionComponent } from '../../pages/alimentacion/alimentacion.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { PerfilUsuarioComponent } from '../../pages/perfil-usuario/perfil-usuario.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'perfil-usuario',   component: PerfilUsuarioComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'alimentacion',          component: AlimentacionComponent },
    { path: 'maps',           component: MapsComponent }
];
