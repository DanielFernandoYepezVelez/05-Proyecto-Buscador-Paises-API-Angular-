import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

/* Services */
import { PaisService } from '../../services/pais.service';

/* Interfaces */
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
})
export class VerComponent implements OnInit {

  /* TypeScript(Dart) Yo Se Que Puede Ser Nulo O Undefined, Pero Tratalo Como Data, Yo Respondo Por Eso!!! */
  public pais!: Country;

  /* El Constructor Es Antes De Que Se Inicialice Este Componente Y Todos Sus Elementos */
  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  /* El ngOnInit Es Cuando El Componente Y Todos Sus Elementos Estan Inicializados */
  ngOnInit(): void {

    /* UNA FORMA OPTIMA DE SUSCRIBIRME A LOS CAMBIOS DE LA URL */
    /* switchMap() => Recibe El Valor Del Observable Anterior Y Retorna Un Nuevo Observable */
    /* tap() => Imprime En Consola Lo Que Reciba */
    this.activatedRoute.params
        .pipe(
          switchMap(({ codigo }) => this.paisService.getPaisAlpha(codigo)),
          tap(console.log)
        )    
        .subscribe(pais => this.pais = pais);

    /* UNA FORMA DE SUSCRIBIRME A LOS CAMBIOS DE LA URL */
    /* /* Aqui Me Estoy Suscribiendo A Todos Los Cambios De La URL 
    this.activatedRoute.params
        .subscribe(({codigo}) => {
          this.paisService.getPaisAlpha(codigo)
              .subscribe(pais => {
                console.log(pais);
              });
        }); */
  }
}
