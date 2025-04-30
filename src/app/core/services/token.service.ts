import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private KEY = 'token';

  salvarToken(token: string): void {
    return localStorage.setItem(this.KEY, token);
  }

  excluirToken(): void {
    return localStorage.removeItem(this.KEY);
  }

  retornarToken(): string {
    return localStorage.getItem(this.KEY) || '';
  }

  possuiToken(): boolean {
    return !!this.retornarToken();
  }
}
