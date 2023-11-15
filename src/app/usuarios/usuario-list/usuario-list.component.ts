import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'ap-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuarioService
  ) { }


  ngOnInit(): void {
    this.usuarios = this.activatedRoute.snapshot.data['usuarios'];
  }

  load() {
    this.usuariosService
      .getList()
      .subscribe(usuarios => {
        this.usuarios = this.usuarios.concat(usuarios);
      });
  }
}
