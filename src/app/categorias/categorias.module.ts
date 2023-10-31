import { NgModule } from "@angular/core";

import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaFormModule } from './categoria-form/categoria-form.mudule';
import { CategoriaListModule } from './categoria-list/categoria-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    imports: [ 
        CategoriaModule,
        CategoriaListModule,
        CategoriaFormModule,
        DarkenOnHoverModule
    ]
})
export class CategoriasModule {}