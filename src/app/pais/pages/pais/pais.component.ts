import { Component } from '@angular/core';

/* Services */
import { PaisService } from '../../services/pais.service';

/* Interfaces */
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent {

  public termino: string = '';
  public isError : boolean = false;
  public paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(): void {
    
    this.isError = false;

    this.paisService.buscarPais(this.termino)
        .subscribe(paises => {
          this.paises = paises;
        }, () => {
          this.isError = true;
          this.paises = [];
        });

  }
}
