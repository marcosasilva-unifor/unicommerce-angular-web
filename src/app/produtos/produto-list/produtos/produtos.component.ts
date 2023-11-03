import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Produto } from '../../produto/produto';

@Component({
  selector: 'ap-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnChanges {
  
  @Input() produtos: Produto[] = [];
  rows: any[] = [];
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.produtos) 
      this.rows = this.groupColumns(this.produtos);
  }

  groupColumns(produtos: Produto[]) {
    const newRows = [];

    for(let index = 0; index < produtos.length; index+=3) {
      newRows.push(produtos.slice(index, index + 3));
    }                            
    return newRows;
  }
}