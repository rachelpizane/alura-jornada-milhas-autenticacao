import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../types/type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  cadastrar(cadastro: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/auth/cadastro`, cadastro);
  }

  buscarCadastro(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/auth/perfil`);
  }

  editarCadastro(cadastro : Usuario): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.apiUrl}/auth/perfil`, cadastro);
  }


}
