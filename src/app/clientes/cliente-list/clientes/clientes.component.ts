import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Cliente } from '../../cliente/cliente';

@Component({
  selector: 'ap-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnChanges {
  
  @Input() clientes: Cliente[] = [];
  rows: any[] = [];
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.clientes) 
      this.rows = this.groupColumns(this.clientes);
  }

  groupColumns(clientes: Cliente[]) {
    const newRows = [];

    for(let index = 0; index < clientes.length; index+=3) {
      newRows.push(clientes.slice(index, index + 3));
    }                            
    return newRows;
  }
}