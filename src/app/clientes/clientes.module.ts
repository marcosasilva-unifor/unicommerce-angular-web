import { NgModule } from '@angular/core';

import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { ClienteModule } from './cliente/cliente.module';
import { ClienteFormModule } from './cliente-form/cliente-form.module';

@NgModule({
    imports: [ 
        ClienteModule,
        ClienteModule,
        ClienteFormModule,
        DarkenOnHoverModule
    ]
})
export class ClientesModule {}