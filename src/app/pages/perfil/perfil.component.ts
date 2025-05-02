import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { Usuario } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{
  titulo: string = `Olá `
  textoBotao: string = "ATUALIZAR"
  perfilComponent: boolean = true;

  token: string = '';
  nome: string = '';
  cadastro!: Usuario;
  form!: FormGroup<any> | null;

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private cadastroService: CadastroService,
    private formularioService: FormularioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.token = this.tokenService.retornarToken();

    this.cadastroService.buscarCadastro(this.token).subscribe((cadastro) => {
        this.cadastro = cadastro;
        this.nome = cadastro.nome;
        this.carregarFormulario();
      }
    );
  }

  carregarFormulario(): void {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      cidade: this.cadastro.cidade,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      telefone: this.cadastro.telefone,
      estado: this.cadastro.estado
    })
  }

  atualizar(): void {
    const dadosAtualizados: Usuario = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      cidade: this.form?.value.cidade,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      telefone: this.form?.value.telefone,
      estado: this.form?.value.estado
    }

    this.cadastroService.editarCadastro(dadosAtualizados, this.token).subscribe({
      next: () => {
        alert('Cadastro atualizado com sucesso!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erro ao atualizar o cadastro:', error);
      }
    })

  }
  deslogar(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
