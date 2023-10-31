import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CategoriaComponent } from './categoria.component';

@NgModule({
    declarations: [CategoriaComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [CategoriaComponent]
})
export class CategoriaModule { }