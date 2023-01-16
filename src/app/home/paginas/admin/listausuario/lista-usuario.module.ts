import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaUsuarioRotasModule } from './lista-usuario-rotas.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ListaUsuarioRotasModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  //providers: [CharactersService]
})
export class ListaUsuarioModule { }
