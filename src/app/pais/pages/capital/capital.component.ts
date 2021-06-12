import { Component } from '@angular/core';

/* Services */
import { PaisService } from '../../services/pais.service';

/* Interfaces */
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
})
export class CapitalComponent {
  
  public termino: string = '';
  public isError : boolean = false;
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = []
  public mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    
    this.isError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarCapital(this.termino).subscribe(paises => {
      this.paises = paises;
    }, (err) => {
      this.isError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string): void {
    this.isError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino).subscribe(paises => {
      this.paisesSugeridos = paises.splice(0,5);
    }, (err) => {
      this.paisesSugeridos = [];
    });
  }
}
