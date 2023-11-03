import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClienteModule } from '../cliente/cliente.module';
import { ClienteListComponent } from './cliente-list.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { ClientesComponent } from './clientes/clientes.component';

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
export class ClienteListModule {}