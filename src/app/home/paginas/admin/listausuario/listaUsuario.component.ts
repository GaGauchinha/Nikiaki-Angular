import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContaUsuario} from "../../../models/conta-usuario.model";
import {UsuarioService} from "../../../services/usuario.service";
import {id, string} from "postcss-selector-parser";

@Component({
  selector: 'app-listausuario',
  templateUrl: './listausuario.component.html',
  styleUrls: ['./listausuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  index = [1, 2, 3, 4];
  isEdit : boolean = false;

  usuario: ContaUsuario ={
    get is_admin(): boolean {
      return false;
    }, get token(): string {
      return "";
    }, get usuario_celular(): string {
      return "";
    }, get usuario_cpf(): string {
      return "";
    }, get usuario_email(): string {
      return "";
    }, get usuario_nome(): string {
      return "";
    }, get usuario_senha(): string {
      return "";
    }, get usuario_username(): string {
      return "";
    },
    get usuario_id(): number {
      return this.usuario_id;
    },
  };

  constructor(
    private UsuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    if (this.router.url.indexOf('edit') > -1) {
      console.log('Inside Edit');
      this.getUsuarioById(this.route.snapshot.params['usuarioId']);

      this.isEdit = true;
    }

    this.getUsuarioById(this.route.snapshot.params['usuarioId']);
    this.usuario = this.route.snapshot.params['usuarioId'];
  }

  getUsuarioById(id: string) {
    this.UsuarioService.loadById(id).subscribe({
      next: (data) => {
        this.usuario = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  editUsuario(): void {
    this.UsuarioService.update(this.usuario.usuario_id, this.usuario).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.log(e)
    });
  }

  deleteUsuario(): void {
    console.log('Delete');
    this.UsuarioService.delete(this.usuario.usuario_id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }
}
