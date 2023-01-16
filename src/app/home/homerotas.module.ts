import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import {RegistrarUsuarioModule} from "./paginas/usuario/cadastrousuario/registrarUsuario.module";
import {RegistrarReceitaModule} from "./paginas/admin/cadastroreceita/registrar-receita.module";

const routes: Routes = [
  {
    path: 'lista-usuarios',
    canLoad:[AuthGuardService],
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./paginas/admin/listausuario/lista-usuario.module').then(
        (m) => m.ListaUsuarioModule
      ),
  },
  {
    path: 'add-usuario',
    canLoad:[AuthGuardService],
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./paginas/usuario/cadastrousuario/registrarUsuario.module').then(
        (m) => m.RegistrarUsuarioModule
      ),
  },
  {
    path: 'registrarreceita',
    canLoad:[AuthGuardService],
    canActivate:[AuthGuardService],
    loadChildren: () =>
      import('./paginas/admin/cadastroreceita/registrar-receita.module').then(
        (m) => m.RegistrarReceitaModule
      ),
  },
  // {
  //   path: 'admin',
  //   canLoad:[AuthGuardService],
  //   canActivate:[AuthGuardService],
  //   loadChildren: () =>
  //     import('./pages/admin/admin.module').then(
  //       (m) => m.AdminModule
  //     ),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRotasModule {}
