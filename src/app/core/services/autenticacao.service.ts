import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token, Usuario } from '../types/type';

interface Login {
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  autenticar(login: Login): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/auth/login`, login);
  }

  cadastrar(cadastro: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/auth/cadastro`, cadastro);
  }
}
