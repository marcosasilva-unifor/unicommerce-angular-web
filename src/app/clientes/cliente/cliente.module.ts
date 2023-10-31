import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClienteComponent } from './cliente.component';

@NgModule({
    declarations: [ClienteComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ClienteComponent]
})
export class ClienteModule { }