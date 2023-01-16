import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaUsuario } from 'src/app/home/models/conta-usuario.model';
import {UsuarioService} from "../../../../services/usuario.service";

@Component({
  selector: 'app-add-usuario-form',
  templateUrl: './addUsuario-form.component.html',
  styleUrls: ['./addUsuario-form.component.css'],
})
export class AdicionarUsuarioFormularioComponent implements OnInit {
  usuario: ContaUsuario = {
    get is_admin(): boolean {
      return false;
    }, get usuario_id(): number {
      return 0;
    },
    usuario_cpf: '',
    usuario_senha: '',
    usuario_username: '',
    usuario_nome: '',
    usuario_celular: '',
    usuario_email: '',
    token: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUsuarioById(this.route.snapshot.params['id']);
  }

  getUsuarioById(id: string) {
    this.usuarioService.loadById(id).subscribe({
      next: (data: any) => {
        this.usuario = data;
        console.log(data);
      },
      error: (e: any) => console.error(e),
    });
  }

  editUsuario(): void {
    this.usuarioService.update(this.usuario.usuario_id, this.usuario).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }
}
