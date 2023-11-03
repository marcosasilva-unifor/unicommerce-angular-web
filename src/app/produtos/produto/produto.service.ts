import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/api';

@Injectable({ providedIn: 'root' })
export class ProdutoService{

    constructor(private http: HttpClient) {}

    get(id: string) {
        return this.http
            .get<Produto>(API + 'produto/' + id);
    }

    getList() {
        return this.http
            .get<Produto[]>(API + '/produto/lista');
    }

    adicionarProduto(produto: Produto): Observable<any> {
        return this.http
        .post<any>(API + '/produto', produto);
    }

    listFromProdutoPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());
    
        return this.http
            .get<Produto[]>(API + '/produto/lista', { params });
    }

}