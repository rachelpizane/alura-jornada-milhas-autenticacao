import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
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
      email: [''],
      senha: ['']
    });
  }

  login(): void {
    this.autenticacaoService.autenticar(this.formLogin.value).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido:', response);
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        console.error('Erro ao fazer login:', error);
      }
    })
  }
}
