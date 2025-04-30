import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {
  static equalTo(campoComparado: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valorCampoAtual = control.value;
      const valorCampoComprado = control.root.get(campoComparado)?.value;

      return valorCampoAtual !== valorCampoComprado ? { equalTo: true } : null;
    };
  }
}

// O control é o campo que está sendo validado, onde a validação é aplicada.
// Control.value é o valor do campo atual que está sendo validado.
// Control.root.get(campoComparado) é usado para acessar o valor do campo que está sendo comparado.
