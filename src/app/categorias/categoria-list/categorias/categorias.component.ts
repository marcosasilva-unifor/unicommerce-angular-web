import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Categoria } from '../../categoria/categoria';

@Component({
  selector: 'ap-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnChanges {
  
  @Input() categorias: Categoria[] = [];
  rows: any[] = [];
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log("CategoriasComponent");
    console.log(this.categorias);
    if(changes.categorias) 
      this.rows = this.groupColumns(this.categorias);
  }

  groupColumns(categorias: Categoria[]) {
    const newRows = [];

    for(let index = 0; index < categorias.length; index+=3) {
      newRows.push(categorias.slice(index, index + 3));
    }                            
    return newRows;
  }
}