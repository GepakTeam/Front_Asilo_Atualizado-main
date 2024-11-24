import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;
  loginError = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Validação de e-mail e senha para redirecionamento
      switch (email) {
        case 'fisioterapia@gmail.com':
          if (password === 'fisioterapia2024') {
            this.router.navigate(['/PerfFisio']);
          } else {
            this.loginError = true;
          }
          break;
        case 'nutricionista@gmail.com':
          if (password === 'nutricionista2024') {
            this.router.navigate(['/PerfNutri']);
          } else {
            this.loginError = true;
          }
          break;
        case 'psicologa@gmail.com':
          if (password === 'psicologa2024') {
            this.router.navigate(['/PerfPsic']);
          } else {
            this.loginError = true;
          }
          break;
        case 'enfermagem@gmail.com':
          if (password === 'enfermagem2024') {
            this.router.navigate(['/PerfEnf']);
          } else {
            this.loginError = true;
          }
          break;
        case 'adm@gmail.com':
          if (password === 'adm2024') {
            this.router.navigate(['/adm']);
          } else {
            this.loginError = true;
          }
          break;
        default:
          this.loginError = true;
          break;
      }
    }
  }
}