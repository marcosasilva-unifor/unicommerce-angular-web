import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoFormComponent } from './produto-form.component';
import { HttpClientModule } from '@angular/common/http';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProdutoFormComponent
  ],
  imports: [
      CommonModule,
      HttpClientModule,
      VMessageModule,
      ReactiveFormsModule,
      RouterModule 
  ],
  exports: [ ProdutoFormComponent ]
})
export class ProdutoFormModule { }
