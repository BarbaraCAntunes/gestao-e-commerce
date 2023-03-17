import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent {

loginForm!: FormGroup;
errorMsg = '';

constructor(
private authService: AuthService,
private router: Router,
private formBuilder: FormBuilder
) {
this.createForm();
}

private createForm() {
this.loginForm = this.formBuilder.group({
email: ['', [Validators.required, Validators.email]],
password: ['', Validators.required]
});
}

onSubmit() {
if (this.loginForm.invalid) {
return;
}
const email = this.loginForm.get('email')?.value;
const password = this.loginForm.get('password')?.value;
this.authService.authenticateUser(email, password)
.then(isAuthenticated => {
if (isAuthenticated) {
this.router.navigateByUrl('/home');
} else {
this.errorMsg = 'Email ou senha incorretos.';
console.log("erro");
}
});
}
}