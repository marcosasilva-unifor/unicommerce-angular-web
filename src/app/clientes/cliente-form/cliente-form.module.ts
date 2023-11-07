import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClienteFormComponent } from './cliente-form.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ClienteFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        VMessageModule,
        ReactiveFormsModule,
    ],
    exports: [ ClienteFormComponent ]
})
export class ClienteFormModule { }