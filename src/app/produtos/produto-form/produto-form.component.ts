import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'ap-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produtoForm: FormGroup;
  @ViewChild('#produtoNomeInput') produtoNomeInput: ElementRef<HTMLInputElement>;
  produto: Produto;

  constructor(
      private formBuilder: FormBuilder,
      private produtoService: ProdutoService,
      private router: Router,
      private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
      this.produtoForm = this.formBuilder.group({
          nome: ['', Validators.required],
          preco: ['', Validators.required],
          descricao: ['', Validators.required],
          estoque: ['', Validators.required],
          categoriaId: ['', Validators.required]
      });
  }

  addProduto() {
      this.produto = this.produtoForm.value;
    
      this.produtoService
          .adicionarProduto(this.produto)
          .subscribe(
            err => {
            console.log(err);
            this.produtoForm.reset();
            this.platformDetectorService.isPlatformBrowser() &&
            this.produtoNomeInput.nativeElement.focus();
            alert('Dados invalidos para o produto')
        }
        ); 

  }
}
