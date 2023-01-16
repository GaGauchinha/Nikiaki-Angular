import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRotasModule } from './homerotas.module';
import { RouterModule } from '@angular/router';
import { UsuarioService } from './services/usuario.service';
import { CoreModule } from 'src/app/core/core.module';
import { AuthGuardService } from './services/auth-guard.service';
import { ErrorhandlerService } from './services/errorhandler.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtinterceptorService } from './services/jwtinterceptor.service';
import {ListaUsuarioComponent} from "./paginas/admin/listausuario/listaUsuario.component";
import {FormsModule} from "@angular/forms";
import {ListaReceitaComponent} from "./paginas/usuario/listareceitas/listaReceita.component";

@NgModule({
  declarations: [
    ListaUsuarioComponent,
    //ListaReceitaComponent
  ],
    imports: [
        RouterModule,
        HomeRotasModule,
        CommonModule,
        //SharedModule,
        CoreModule,
        FormsModule
    ],
  exports: [
  ],
  providers: [
    UsuarioService,
    AuthGuardService,
    {provide: ErrorHandler, useClass: ErrorhandlerService},
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
