import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private KEY = 'token';

  salvarToken(token: string): void {
    return localStorage.setItem(this.KEY, token);
  }

  exbluirToke(): void {
    return localStorage.removeItem(this.KEY);
  }

  retornarToken(): string {
    return localStorage.getItem(this.KEY) || '';
  }

  verificarSePossuiToken(): boolean {
    return !!this.retornarToken();
  }
}
