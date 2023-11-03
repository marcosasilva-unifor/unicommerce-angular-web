import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';

@Injectable({ providedIn: 'root'})
export class ClienteListResolver implements Resolve<Observable<Cliente[]>>{

    constructor(private service: ClienteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente[]> {
        return this.service.getList();
    }
}