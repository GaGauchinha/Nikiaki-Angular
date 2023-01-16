import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarReceitaComponent} from "./registrar-receita.component";

const routes: Routes = [
  {
    path: '',
    component: RegistrarReceitaComponent,
    children: [
      { path: ':id/:nome/edit', component: RegistrarReceitaComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarReceitaRotas{ }
