import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ContaUsuario } from '../../../models/conta-usuario.model';
import { ErrorhandlerService } from '../../../services/errorhandler.service';
import { UsuarioService } from '../../../services/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Receita} from "../../../models/receita.model";
import {ReceitaService} from "../../../services/receita.service";

@Component({
  selector: 'app-register-receita',
  templateUrl: './registrar-receita.component.html',
  styleUrls: ['./registrar-receita.component.css']
})
export class RegistrarReceitaComponent implements OnInit {

  receitas?: Receita[];
  selectReceita = Receita;
  receita: Receita = {
    receita_categoria: '',
    receita_ingredientes: '',
    receita_nome: '',
    receita_porcoes: '',
    receita_tempodepreparo:''
  };
  isEdit: boolean = false;

  constructor(
    private receitaService: ReceitaService,
    private router: Router,
    private errorHandler: ErrorhandlerService
  ) { }

  ngOnInit(): void {
    this.getReceita();
  }

  getReceita(): void {
    this.receitaService.getAll().subscribe({
      next: (data) => {
        this.receitas = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  addReceita(): void {
    console.log("clicked")
    console.log('Dentro do registro');
    console.log(this.receita);

    const data = {
      receita_nome: this.receita?.receita_nome,
      receita_porcoes: this.receita?.receita_porcoes,
      receita_categoria: this.receita?.receita_categoria,
      receita_ingredientes: this.receita?.receita_ingredientes,
      receita_tempodepreparo: this.receita?.receita_tempodepreparo,
    };

    this.receitaService.create(data).subscribe({
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
          window.location.reload()
        },
        error: (e) => this.errorHandler.handleError(e),
      });
  }

  editReceita(): void {
    this.receitaService.update(this.receita.receita_nome, this.receita).subscribe({
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
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Edited successfully'
        })
        window.location.reload()
      },
      error: (e) => console.log(e),
    });
  }
  //
  // deleteReceita(receita_id?: Number): void {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     color: 'var(--primary)',
  //     background: 'var(--main)',
  //     showCancelButton: true,
  //     cancelButtonColor: '#d33',
  //     confirmButtonColor: '#9075f3',
  //     confirmButtonText: 'Delete'
  //   }).then((result) => {
  //     console.log(this.receita?.receita_id);
  //     console.log(receita_id);
  //     if (result.isConfirmed) {
  //       this.receitaService.delete(receita_id).subscribe({
  //         next: (res) => {
  //           console.log(res);
  //           const Toast = Swal.mixin({
  //             toast: true,
  //             position: 'top-end',
  //             showConfirmButton: false,
  //             color: 'var(--main)',
  //             background: 'var(--primary)',
  //             timer: 3000,
  //             timerProgressBar: true,
  //             didOpen: (toast) => {
  //               toast.addEventListener('mouseenter', Swal.stopTimer)
  //               toast.addEventListener('mouseleave', Swal.resumeTimer)
  //             }
  //           })
  //
  //           Toast.fire({
  //             icon: 'success',
  //             title: 'Deleted successfully'
  //           })
  //           window.location.reload()
  //         },
  //         error: (e) => console.error(e),
  //       });
  //     }
  //   })
  //
  //
  // }

  onClick(selectedReceita: Receita) {
    this.receita = selectedReceita;
    console.log(selectedReceita);
    this.isEdit = true;
  }

  clear() {
    this.receita = new Receita();
    this.isEdit = false;
  }

}
