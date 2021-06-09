import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {

  @Input() paises: Country[] = [];

  constructor() { }

}
