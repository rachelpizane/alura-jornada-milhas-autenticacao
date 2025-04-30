import { Usuario } from 'src/app/core/types/type';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<Usuario | null>(null);

  constructor(private tokenService : TokenService) {
    if(this.tokenService.possuiToken()) {
      this.decodificarJWT()
    }
  }

  retornarUser(): Observable<Usuario | null> {
    return this.userSubject.asObservable();
  }

  salvarToken(token: string): void {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  lougout(): void {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado(): boolean {
    return this.tokenService.possuiToken();
  }

  decodificarJWT(): void {
    const token: string = this.tokenService.retornarToken();
    const user: Usuario = jwt_decode(token) as Usuario;
    console.log("Decodificado: ", user);
    this.userSubject.next(user);
  }
}
