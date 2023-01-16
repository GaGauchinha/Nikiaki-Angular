import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../home/components/login/login.component';
import { RegistrarReceitaComponent } from '../home/paginas/admin/cadastroreceita/registrar-receita.component';
import { RegistrarUsuarioComponent } from '../home/paginas/usuario/cadastrousuario/registrarUsuario.component';
import { ListaReceitaComponent } from '../home/paginas/usuario/listareceitas/listaReceita.component';
import { AuthGuardService } from '../home/services/auth-guard.service';


const routes: Routes = [
    { path: '', redirectTo: 'listareceita', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canLoad:[AuthGuardService], canActivate:[AuthGuardService]},
    { path: 'registerusuario', component: RegistrarUsuarioComponent, canLoad:[AuthGuardService]},
    { path: 'registerreceita', component: RegistrarReceitaComponent, canLoad:[AuthGuardService]},
    { path: 'listareceita', component: ListaReceitaComponent, canLoad:[AuthGuardService]},
    { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
