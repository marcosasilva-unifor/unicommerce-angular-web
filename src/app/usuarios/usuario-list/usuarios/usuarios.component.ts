import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Usuario } from '../../usuario/usuario';

@Component({
  selector: 'ap-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnChanges {

  @Input() usuarios: Usuario[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.usuarios) 
      this.rows = this.groupColumns(this.usuarios);
  }
  groupColumns(usuarios: Usuario[]): any[] {
    const newRows = [];

    for(let index = 0; index < usuarios.length; index+=3) {
      newRows.push(usuarios.slice(index, index + 3));
    }

    return newRows
  }
}
