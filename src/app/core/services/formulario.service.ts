import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private formCadastro!: FormGroup;

  getCadastro(): FormGroup {
    return this.formCadastro;
  }

  setCadastro(cadastro: FormGroup): void {
    this.formCadastro = cadastro;
  }
}
