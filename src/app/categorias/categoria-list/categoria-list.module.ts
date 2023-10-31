import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaListComponent } from './categoria-list.component';
import { CategoriaModule } from '../categoria/categoria.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        CategoriaListComponent,
        CategoriasComponent
    ],
    imports: [
        CommonModule, 
        CategoriaModule,
        CardModule, 
        DarkenOnHoverModule
    ]
})
export class CategoriaListModule {}