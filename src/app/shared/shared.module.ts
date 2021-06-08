import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
/* Se Puede Importar Este Modulo Para Las Rutas */
import { AppRoutingModule } from '../app-routing.module';
/* Se Puede Importar Este Otro Modulo Para Las Rutas */
import { RouterModule } from '@angular/router';

/* Components */
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
