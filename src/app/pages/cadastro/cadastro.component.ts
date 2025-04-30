import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { Usuario } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  constructor(private formularioService: FormularioService, private autenticacaoService: AutenticacaoService) { }

  cadastrar(): void {
    const formCadastro: FormGroup | null = this.formularioService.getCadastro();

    if (!formCadastro) {
      throw new Error('Formulário de cadastro não foi inicializado.');
    }

    if (formCadastro.invalid) {
      console.warn('Formulário de cadastro inválido.');
      return;
    }

    const usuario : Usuario = formCadastro.value;

    this.autenticacaoService.cadastrar(usuario).subscribe({
      next: (response) => {
        console.log('Cadastro realizado com sucesso!', response);
      },
      error: (error) => {
        console.error('Erro ao realizar o cadastro:', error);
      }
    });
  }
}
