import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarUsuarioRotas } from './registrarUsuario-rotas.module';
import { FormsModule } from '@angular/forms';
import {
  AdicionarUsuarioFormularioComponent
} from './adicionarUsuario/addUsuario-form.component';
import { RegistrarUsuarioComponent } from './registrarUsuario.component';
//import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {UsuarioService} from "../../../services/usuario.service";
import {RegistrarReceitaComponent} from "../../admin/cadastroreceita/registrar-receita.component";

@NgModule({
    declarations: [
        AdicionarUsuarioFormularioComponent,
        RegistrarUsuarioComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        //SharedModule,

        RouterModule,
        RegistrarUsuarioRotas
    ],
    exports: [
        RegistrarUsuarioComponent
    ],
    providers: [UsuarioService]
})
export class RegistrarUsuarioModule{ }
