import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { UsuarioListModule } from './usuario-list/usuario-list.module';

@NgModule({
  imports: [
    CommonModule,
    UsuarioListModule,
    DarkenOnHoverModule
  ],
  })
export class UsuariosModule { }
