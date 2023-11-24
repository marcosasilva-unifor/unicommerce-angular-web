import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';

const API_URL = "http://localhost:8080";

@Injectable()
export class SignUpService {

    constructor(private http: HttpClient) {}

    checkUserLoginTaken(login: string) {
        
        return this.http.get('/api/login/' + login);
    }

    signup(newUser: NewUser) {
        return this.http.post(API_URL + '/api/usuario', newUser);
    }
}