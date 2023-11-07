import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Categoria } from '../categoria/categoria';
import { CategoriaService } from '../categoria/categoria.service';

@Component({
  selector: 'ap-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Categoria[] = [];
  filter: string = '';
  currentPage: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.categorias = this.activatedRoute.snapshot.data['categorias'];
  }

  load() {
    this.categoriaService
      .getList()
      .subscribe(categorias => {
        this.categorias = this.categorias.concat(categorias);
      });
  }
}
