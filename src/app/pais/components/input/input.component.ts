import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  public termino: string = '';
  
  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  /* Se Ejecuta Una Sola Vez, Después De Que El Componente Se Cree Y Se Inicialice */
  ngOnInit(): void {
    this.debouncer
        .pipe(
          debounceTime(300),
        )
        .subscribe(valor => {
          // console.log('debouncer: ', valor);
          this.onDebounce.emit(valor);
        });
  }

  public buscar(): void {
    this.onEnter.emit(this.termino);
  }

  /* Cada Vez Que Se Presione Una Tecla Se LLama El Next, El Next Esta Suscrito Al Subscribe,
  Automaticamente Y Recibe El Nuevo Valor Y Ese Valor Es El Que Se Muestra Por Pantalla */
  public teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
