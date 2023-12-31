import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject, Subject } from 'rxjs';

import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userLogin: string;

    constructor(private tokenService: TokenService) {

        this.tokenService.hasToken() &&
        this.decodeAndNotify();
     }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;// <- (aqui a chamada jwt_decode)
        this.userLogin = user.sub;
        this.userSubject.next(user);
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserLogin(){
        console.log(this.userLogin);
        return this.userLogin;
        
    } 
}