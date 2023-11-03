import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoriaService } from '../categoria/categoria.service';
import { Categoria } from '../categoria/categoria';

@Injectable({ providedIn: 'root'})
export class CategoriaListResolver implements Resolve<Observable<Categoria[]>>{

    constructor(private service: CategoriaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Categoria[]> {
        return this.service.getList();
    }
}