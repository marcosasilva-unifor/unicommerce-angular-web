import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriaFormComponent } from './categoria-form.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        CategoriaFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        VMessageModule,
        ReactiveFormsModule,
        RouterModule 
    ],
    exports: [ CategoriaFormComponent ]
})
export class CategoriaFormModule { }