import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';

@Injectable({ providedIn: 'root'})
export class ProdutoListResolver implements Resolve<Observable<Produto[]>>{

    constructor(private service: ProdutoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produto[]> {
        console.log("ProdutoListResolver");
        return this.service.getList();
    }
}