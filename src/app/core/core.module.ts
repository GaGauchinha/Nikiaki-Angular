import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../home/components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../home/components/login/login.component';
import { RegistrarUsuarioComponent } from '../home/paginas/usuario/cadastrousuario/registrarUsuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from '../home/services/auth-guard.service';
import { ErrorhandlerService } from '../home/services/errorhandler.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtinterceptorService } from '../home/services/jwtinterceptor.service';
import {ListaUsuarioComponent} from "../home/paginas/admin/listausuario/listaUsuario.component";

@NgModule({
  declarations: [
     NavbarComponent,
     LoginComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    {provide: ErrorHandler, useClass: ErrorhandlerService},
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true}
  ],
  exports: [
    NavbarComponent,
    LoginComponent
  ]
})
export class CoreModule {}
// @NgModule()

//   constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
//     if (parentModule) {
//       throw new Error(
//         `${parentModule} has already been loaded. Import Core module in the AppModule only.`
//       );
//     }
//   }
// }
