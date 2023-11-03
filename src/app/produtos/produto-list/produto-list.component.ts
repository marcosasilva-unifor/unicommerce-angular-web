import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'ap-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }


  ngOnInit(): void {
    this.produtos = this.activatedRoute.snapshot.data['produtos'];
  }

  load() {
    this.produtoService
      .getList()
      .subscribe(produtos => {
        this.produtos = this.produtos.concat(produtos);
      });
  }
}
