import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ContaUsuario } from '../../../models/conta-usuario.model';
import { ErrorhandlerService } from '../../../services/errorhandler.service';
import { UsuarioService } from '../../../services/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-usuario',
  templateUrl: 'registrarUsuario.component.html',
  styleUrls: ['./registrarUsuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  ContaUsuario: ContaUsuario = {
    get is_admin(): boolean {
      return false;
    }, get token(): string {
      return "";
    }, get usuario_id(): number {
      return this.usuario_id;
    },
    usuario_username: '',
    usuario_nome: '',
    usuario_senha: '',
    usuario_email: '',
    usuario_cpf: '',
    usuario_celular: ''
  };

  reactiveForm!: FormGroup;
  // passwordPtn = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{3,8}$';
  passwordPtn = '^().{3,8}$';


  constructor(
    private ContaUsuarioService: UsuarioService,
    private router: Router,
    private errorHandler: ErrorhandlerService
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    console.log('Dentro do registro');
    console.log(this.ContaUsuario);

    const data = {
      usuario_username: this.ContaUsuario?.usuario_username,
      usuario_nome: this.ContaUsuario?.usuario_nome,
      usuario_senha: this.ContaUsuario?.usuario_senha,
      usuario_email: this.ContaUsuario?.usuario_email,
      usuario_cpf: this.ContaUsuario?.usuario_cpf,
      usuario_celular: this.ContaUsuario?.usuario_celular,
    };

    this.ContaUsuarioService.create(data).subscribe({
        next: (res) => {
          console.log(res);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            color: 'var(--main)',
            background: 'var(--primary)',
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast: { addEventListener: (arg0: string, arg1: any) => void; }) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Registrado com sucesso'
          })
          this.router.navigate(['/lista-receitas'])

        },
        error: (e) => this.errorHandler.handleError(e),
      });
  }
}
