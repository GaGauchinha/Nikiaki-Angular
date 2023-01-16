import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from '../../usuario/cadastrousuario/registrarUsuario.component';

import { ListaUsuarioComponent } from './listaUsuario.component';

const routes: Routes = [
  {
    path: '',
    component: ListaUsuarioComponent,
    children: [
      { path: ':id/:nome/edit', component: RegistrarUsuarioComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaUsuarioRotasModule { }
