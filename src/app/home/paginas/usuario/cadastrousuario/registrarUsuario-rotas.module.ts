import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AdicionarUsuarioFormularioComponent
} from './adicionarUsuario/addUsuario-form.component';
import {RegistrarUsuarioComponent} from "./registrarUsuario.component";

const routes: Routes = [
  {
    path: '',
    component: RegistrarUsuarioComponent,
    children: [
      { path: ':id/:nome/edit', component: AdicionarUsuarioFormularioComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarUsuarioRotas{ }
