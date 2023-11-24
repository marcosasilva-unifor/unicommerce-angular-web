import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { UserService } from 'src/app/core/user/user.service';
import { ServerLogService } from './server-log.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler { 

    constructor(private injector: Injector) {}

    handleError(error: any): void {
        
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);
        
        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';
        
        const message = error.message
            ? error.message :
            error.toString();
        
        console.log('passei pelo handler');
   
        if(environment.production) router.navigate(['/error']);

        console.log('antes do StackTrace');

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n')
                    
                    console.log(message);
                    console.log(stackAsString);
                    console.log('O que será enviado para o servidor');
                    serverLogService.log({ 
                        message, 
                        url, 
                        userName: userService.getUserLogin(), 
                        stack: stackAsString
                    }
                    ).subscribe(() => console.log('Error logged on server'),
                        err => {
                            console.log(err);
                            console.log('Fail to send error log to server');
                        }
                    );
            });
    }
}