import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { FormValidations } from '../form-validation';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit{
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  @Input() perfilComponent = false;
  @Input() titulo: string = 'Crie sua conta'
  @Input() textoBotao: string = 'CADASTRAR';

  @Output() acaoExecutada: EventEmitter<any> = new EventEmitter<any>();
  @Output() deslogar: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    });

    if(this.perfilComponent){
      this.cadastroForm.get('aceitarTermos')?.setValidators(null)
    } else {
      this.cadastroForm.get('aceitarTermos')?.setValidators([Validators.requiredTrue])
    }

    this.formularioService.setCadastro(this.cadastroForm);
  }

  executarAcao(): void {
    this.acaoExecutada.emit();
  }

  emitirDeslogar(): void{
    this.deslogar.emit();
  }
}
