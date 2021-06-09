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

  buscar(termino: string): void {
    
    this.isError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
        .subscribe(paises => {
          this.paises = paises;
        }, () => {
          this.isError = true;
          this.paises = [];
        });

  }

  sugerencias(termino: string): void {
    this.isError = false;
    /* TODO: Crear Sugerencias */


  }
}
