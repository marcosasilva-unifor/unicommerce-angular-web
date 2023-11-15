import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from './usuario';

const API = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http
      .get<Usuario>(API + 'usuario/' + id);
  }

  getList() {
    return this.http
      .get<Usuario[]>(API + '/usuario/lista');
  }

  adicionarUsuario(usuario: Usuario): Observable<any> {
    return this.http
    .post<any>(API + '/usuario', usuario);
  } 

  listFromUsuarioPaginated(userName: string, page: number) {
    const params = new HttpParams()
        .append('page', page.toString());

    return this.http
        .get<Usuario[]>(API + '/usuario/lista', { params });
  }

}
