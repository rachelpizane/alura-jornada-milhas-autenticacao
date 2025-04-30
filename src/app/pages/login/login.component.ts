import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacaoService: AutenticacaoService, private router: Router) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  login(): void {
    if (this.formLogin.invalid) {
      console.error('Formulário inválido');
      console.log(this.formLogin);
      return;
    }

    this.autenticacaoService.autenticar(this.formLogin.value).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido:', response);
        this.router.navigate(['/perfil']);
      },
      error: (error) => {
        console.error('Erro ao fazer login:', error);
      }
    })
  }
}
