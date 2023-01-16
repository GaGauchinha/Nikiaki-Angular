import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receita } from '../models/receita.model';
import {first} from "rxjs/operators";

const baseUrl = "http://localhost:8080/receita"

@Injectable()
export class ReceitaService {

  private readonly API = 'api/receita';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Receita[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        // tap(courses => console.log(courses))
      );
  }


  loadById(receita_id: string) {
    return this.httpClient.get<Receita>(`${this.API}/${receita_id}`);
  }
  getAll(): Observable<Receita[]> {
    return this.httpClient.get<Receita[]>(baseUrl);
  }

  findByName(receita_nome: any): Observable<Receita[]> {
    return this.httpClient.get<Receita[]>(`${baseUrl}?receita_nome=${receita_nome}`);
  }

  delete(receita_id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${receita_id}`);
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(baseUrl, data);
  }

  update(receita_id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${receita_id}`, data);
  }

}
