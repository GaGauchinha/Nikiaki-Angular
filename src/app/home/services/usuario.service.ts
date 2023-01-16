import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaUsuario } from '../models/conta-usuario.model';
import {first} from "rxjs/operators";

const baseUrl = "http://localhost:8080/usuario"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'api/usuarios';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<ContaUsuario[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        // tap(courses => console.log(courses))
      );
  }


  loadById(usuario_id: string) {
    return this.httpClient.get<ContaUsuario>(`${this.API}/${usuario_id}`);
  }
  getAll(): Observable<ContaUsuario[]> {
    return this.httpClient.get<ContaUsuario[]>(baseUrl);
  }

    findByName(usuario_nome: any): Observable<ContaUsuario[]> {
      return this.httpClient.get<ContaUsuario[]>(`${baseUrl}?usuario_nome=${usuario_nome}`);
  }

  delete(usuario_id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${usuario_id}`);
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(baseUrl, data);
  }

  update(usuario_id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${usuario_id}`, data);
  }

}
