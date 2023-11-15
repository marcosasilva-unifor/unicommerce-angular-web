import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [UsuarioComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [UsuarioComponent]
})
export class UsuarioModule{}