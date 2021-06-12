import { Component } from '@angular/core';

/* Services */
import { PaisService } from '../../services/pais.service';

/* Interfaces */
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }

    `
  ]
})
export class PaisComponent {

  public termino: string = '';
  public paises: Country[] = [];
  public isError : boolean = false;
  
  public paisesSugeridos: Country[] = [];
  public mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  public buscar(termino: string): void {
    
    this.isError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(this.termino).subscribe(paises => {
      this.paises = paises;
    }, (err) => {
      this.isError = true;
      this.paises = [];
    });
  }

  public sugerencias(termino: string): void {
    this.isError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino).subscribe(paises => {
      this.paisesSugeridos = paises.splice(0,5);
    }, (err) => {
      this.paisesSugeridos = [];
    });
  }

/*   public buscarSugerido(termino: string) {
    this.buscar(termino);
    // this.mostrarSugerencias = false;
  } */
}
