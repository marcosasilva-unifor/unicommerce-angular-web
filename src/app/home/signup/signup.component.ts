import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NewUser } from './new-user';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { SignUpService } from './signup.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { userNamePassword } from './username-password.validator';

@Component({
    templateUrl: './signup.component.html',
    providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit { 

    signupForm: FormGroup;
    @ViewChild('inputLogin') inputLogin: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            login:['',
                [
                    Validators.required,
                    //Validators.pattern(/^[a-z0-9_\-]+$/),
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ]//,
                //this.userNotTakenValidatorService.checkUserLoginTaken()

            ],
            senha: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
        
            ]
        },
        {
            validator: userNamePassword
        }
        );
        this.platformDetectorService.isPlatformBrowser() &&
        this.inputLogin.nativeElement.focus();
    }

    signup() {
        if(this.signupForm.invalid && !this.signupForm.pending) {
            const newUser = this.signupForm.getRawValue() as NewUser;
            this.signUpService
            .signup(newUser)
            .subscribe(
                () => this.router.navigate(['']),
                err => console.log(err)
            );
        }
    }
}