import { Component } from '@angular/core';

/* Services */
import { PaisService } from '../../services/pais.service';

/* Interfaces */
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }
  `]
})
export class RegionComponent {

  public regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public regionActiva: string = 'No Existe Una Región Seleccionada';
  public paises: Country[] = [];

  constructor(private paisService: PaisService) {

  }

  public getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  public activarRegion(region: string) {
    this.regionActiva = region;

    this.paisService.buscarRegion(region)
        .subscribe(paises => {
          this.paises = paises;
        });
  }

}
