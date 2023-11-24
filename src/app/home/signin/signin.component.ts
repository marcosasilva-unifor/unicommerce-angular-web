import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('usuarioLoginInput') usuarioLoginInput: ElementRef<HTMLInputElement>;
   
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activatedRoute
            .queryParams
            .subscribe(params => this.fromUrl = params['fromUrl']);

        this.loginForm = this.formBuilder.group({
            login: ['', Validators.required],
            senha: ['', Validators.required]
        });
        this.platformDetectorService.isPlatformBrowser() &&
        this.usuarioLoginInput.nativeElement.focus();
    }

    login() {
        if(this.loginForm.valid) {
            const login = this.loginForm.get('login').value;
            const senha = this.loginForm.get('senha').value;
        
            this.authService
                .authenticate(login, senha)
                .subscribe(
                    () => this.fromUrl
                        ? this.router.navigateByUrl(this.fromUrl)
                        : this.router.navigate(['user', login])
                    ,
                    err => {
                        console.log(err);
                        this.loginForm.reset();
                        this.platformDetectorService.isPlatformBrowser() &&
                        this.usuarioLoginInput.nativeElement.focus();
                        alert('Invalid login or senha')
                    }
                );
        
        }    
    }
 }