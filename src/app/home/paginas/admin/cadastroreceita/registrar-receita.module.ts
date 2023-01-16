import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarReceitaRotas } from './registrar-receita-rotas.module';
import { FormsModule } from '@angular/forms';
import { RegistrarReceitaComponent } from './registrar-receita.component';
//import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {ReceitaService} from "../../../services/receita.service";
import {CoreModule} from "../../../../core/core.module";

@NgModule({
  declarations: [
    RegistrarReceitaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    //SharedModule,

    RouterModule,
    RegistrarReceitaRotas,
    CoreModule
  ],
  providers: [ReceitaService]
})
export class RegistrarReceitaModule{ }
