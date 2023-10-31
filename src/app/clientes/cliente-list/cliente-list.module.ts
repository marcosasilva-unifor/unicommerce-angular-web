import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClienteModule } from '../cliente/cliente.module';
import { ClienteComponent } from '../cliente/cliente.component';
import { ClienteListComponent } from './cliente-list.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        ClienteListComponent,
        ClientesComponent
    ],
    imports: [ 
        CommonModule,
        ClienteModule,
        CardModule, 
        DarkenOnHoverModule
    ]
})
export class CategoriaListModule {}