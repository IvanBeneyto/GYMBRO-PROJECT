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
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    PerfilUsuarioComponent,
    TablesComponent,
    AlimentacionComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}
