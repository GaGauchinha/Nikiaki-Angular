import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContaUsuario } from '../models/conta-usuario.model';

//const baseUrl = "http://localhost:8080/login"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://localhost:5432/'
  private readonly LOGGED_USER = 'user-logged'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(contaUsuario: ContaUsuario): Observable<ContaUsuario> {
    return this.http.post<ContaUsuario>(this.API_URL+'login', contaUsuario);
  }

  setLoggedUser(contaUsuario: ContaUsuario) : void {
    sessionStorage.setItem(this.LOGGED_USER, JSON.stringify(contaUsuario));
  } 

  logout(): void {
    sessionStorage.removeItem(this.LOGGED_USER);
    this.router.navigate(['/login']);
  }

  getLoggedUser(): ContaUsuario {    
    return JSON.parse(<string> sessionStorage.getItem(this.LOGGED_USER));   
  }
}