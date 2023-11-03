import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './produto-list.component';
import { ProdutoModule } from '../produto/produto.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutosComponent
  ],
  imports: [
      CommonModule, 
      ProdutoModule,
      CardModule, 
      DarkenOnHoverModule
  ]
})
export class ProdutoListModule {}