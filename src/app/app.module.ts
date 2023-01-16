import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


import { AppRoutingModule } from './app-routing.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { HomeRotasModule } from './home/homerotas.module';
import { UsuarioService } from './home/services/usuario.service';
import { ReceitaService } from './home/services/receita.service';
import { AuthGuardService } from './home/services/auth-guard.service';
import { ErrorhandlerService } from './home/services/errorhandler.service';
import { JwtinterceptorService } from './home/services/jwtinterceptor.service';

@Injectable()

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   // SharedModule,
    CoreModule,
    HomeModule,

    RouterModule,
    AppRoutingModule,
    CoreRoutingModule,
    HomeRotasModule,

  ],
  providers: [
    UsuarioService,
    ReceitaService,
    AuthGuardService,
    {provide: ErrorHandler, useClass: ErrorhandlerService},
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
