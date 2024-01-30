import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AlimentacionComponent } from '../../pages/alimentacion/alimentacion.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { PerfilUsuarioComponent } from '../../pages/perfil-usuario/perfil-usuario.component';
import { RutinasComponent} from '../../pages/rutinas/rutinas.component';
import { TiendaComponent } from 'src/app/pages/tienda/tienda.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'perfil-usuario',   component: PerfilUsuarioComponent },
    { path: 'rutinas',         component: RutinasComponent },
    { path: 'tienda',         component: TiendaComponent },
    { path: 'alimentacion',          component: AlimentacionComponent },
    { path: 'maps',           component: MapsComponent }
];
