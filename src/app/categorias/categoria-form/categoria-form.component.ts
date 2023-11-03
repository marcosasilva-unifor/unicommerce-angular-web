import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

import { CategoriaService } from '../categoria/categoria.service';
import { Categoria } from '../categoria/categoria';

@Component({
  selector: 'ap-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  categoriaForm: FormGroup;
  @ViewChild('#categoriaNomeInput') categoriaNomeInput: ElementRef<HTMLInputElement>;
   categoria: Categoria;

  constructor(
      private formBuilder: FormBuilder,
      private categoriaService: CategoriaService,
      private router: Router,
      private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
      this.categoriaForm = this.formBuilder.group({
          nome: ['', Validators.required],
          status: ['', Validators.required]
      });
  }

  addCategoria() {
      this.categoria = this.categoriaForm.value;
      
      this.categoriaService
          .adicionarCategoria(this.categoria)
          .subscribe(
              //() => this.router.navigateByUrl('categoria/lista'),
              //() => this.router.navigate(['user', userName]),
              err => {
                  console.log(err);
                  this.categoriaForm.reset();
                  this.platformDetectorService.isPlatformBrowser() &&
                  this.categoriaNomeInput.nativeElement.focus();
                  alert('Dados invalidos para a categoria')
              }
        ); 

  }
}
