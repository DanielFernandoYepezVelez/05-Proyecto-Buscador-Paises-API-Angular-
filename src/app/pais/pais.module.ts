import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Components */
import { VerComponent } from './pages/ver/ver.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerComponent,
    TableComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerComponent
  ]
})
export class PaisModule { }
