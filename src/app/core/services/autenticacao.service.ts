import { Observable, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../types/type';
import { UserService } from './user.service';

interface Login {
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http : HttpClient,
    private userService: UserService
  ) { }

  autenticar(login: Login): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, login).pipe(
      tap((response: AuthResponse) => {
        const token: string = response.access_token;
        this.userService.salvarToken(token);
      })
    );
  }

  cadastrar(cadastro: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/auth/cadastro`, cadastro);
  }
}
