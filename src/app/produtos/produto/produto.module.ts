import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [
      CommonModule,
      HttpClientModule
  ],
  exports: [ProdutoComponent]
})
export class ProdutoModule { }
