import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClienteFormComponent } from './cliente-form.component';

@NgModule({
    declarations: [
        ClienteFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ ClienteFormComponent ]
})
export class ClienteFormModule { }