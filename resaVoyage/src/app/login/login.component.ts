import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errorMessage: string;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {  // redirect to home if already logged in     

      /*   if (this.authService.currentUserValue) {
            this.router.navigateByUrl('/commande');
        } */
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
  
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    login() {
        this.submitted = true;

       /*  // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        } */
        const val = this.loginForm.value;
        this.loading = true;
        if (this.f.username.value && this.f.password.value) {
            this.authService.login(this.f.username.value, this.f.password.value)
                .pipe(first())
                .subscribe(
                    data => {
                        this.router.navigate([this.returnUrl]);
                        sessionStorage.setItem('username', this.f.username.value);
                    },
                    (error) => {
                        console.log(error);
                        switch (true) {
                            case error.status === 400 || error.status === 401: {
                                this.loading = false;
                                this.errorMessage = 'Login ou mot de passe incorrect';
                                break;
                            }
                            case error.status === 504: {
                                this.errorMessage = 'Veuillez réessayer plutart!';
                                break;
                            }
                            default: {
                                this.errorMessage = 'Erreur de connexion';
                                break;
                            }
                        }
                    });
        } else {
            this.loading = false;
            this.errorMessage = 'Veuillez renseigner le login et le password!';
           
        }
    }

    logout() {
        this.authService.logout();
        
    }
}
