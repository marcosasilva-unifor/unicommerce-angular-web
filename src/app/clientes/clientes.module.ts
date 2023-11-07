import { NgModule } from '@angular/core';

import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { ClienteModule } from './cliente/cliente.module';
import { ClienteFormModule } from './cliente-form/cliente-form.module';
import { ClienteListModule } from './cliente-list/cliente-list.module';


@NgModule({
    imports: [ 
        ClienteModule,
        ClienteListModule,
        ClienteFormModule,
        DarkenOnHoverModule
    ]
})
export class ClientesModule {}