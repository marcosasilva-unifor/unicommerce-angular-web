import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

import { SignUpService } from './signup.service';

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) {}

    checkUserLoginTaken() {

        return (control: AbstractControl) => {
            return control
            .valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(userLogin =>
                this.signUpService.checkUserLoginTaken(userLogin)
            ))
            .pipe(map(isTaken => isTaken ? { userLoginTaken: true } : null))
            .pipe(first());
        }
    }
}