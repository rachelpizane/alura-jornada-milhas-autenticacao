import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: [''],
      senha: ['']
    });
  }

  login(): void {
    console.log(this.formLogin.value['email']);
    console.log(this.formLogin.value['senha']);
  }
}
