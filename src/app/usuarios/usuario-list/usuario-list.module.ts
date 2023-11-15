import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioListComponent } from './usuario-list.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { UsuarioModule } from '../usuario/usuario.module';

@NgModule({
    declarations: [
      UsuarioListComponent,
      UsuariosComponent
    ],
    imports: [
        CommonModule, 
        UsuarioModule,
        CardModule, 
        DarkenOnHoverModule
    ]
  })
  export class UsuarioListModule {}