import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AlimentacionComponent } from '../../pages/alimentacion/alimentacion.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { PerfilUsuarioComponent } from '../../pages/perfil-usuario/perfil-usuario.component';
import { RutinasComponent } from '../../pages/rutinas/rutinas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TiendaComponent } from 'src/app/pages/tienda/tienda.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RutineTableComponent } from 'src/app/pages/rutinas/components/rutine-table.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [
    DashboardComponent,
    PerfilUsuarioComponent,
    RutinasComponent,
    AlimentacionComponent,
    TiendaComponent,
    MapsComponent,
    RutineTableComponent
  ]
})

export class AdminLayoutModule {}
