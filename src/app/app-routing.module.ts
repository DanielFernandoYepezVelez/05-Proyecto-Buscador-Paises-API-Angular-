import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { VerComponent } from './pais/pages/ver/ver.component';
import { PaisComponent } from './pais/pages/pais/pais.component';
import { RegionComponent } from './pais/pages/region/region.component';
import { CapitalComponent } from './pais/pages/capital/capital.component';

/* pathMatch: 'full' => Aplica ayudas en el routerLinkOptions Del Html 
Si La Ruta Es Exactamente La Ruta Del pathMatch */

const routes: Routes = [
  { path: '', component: PaisComponent, pathMatch: 'full' },
  { path: 'region', component: RegionComponent },
  { path: 'capital', component: CapitalComponent },
  { path: 'pais/:codigo', component: VerComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
