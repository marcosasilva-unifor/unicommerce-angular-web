import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';

@Injectable({ providedIn: 'root'})
export class UsuarioListResolver implements Resolve<Observable<Usuario[]>>{

    constructor(private service: UsuarioService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario[]> {
        console.log("UsuarioListResolver");
        return this.service.getList();
    }
}