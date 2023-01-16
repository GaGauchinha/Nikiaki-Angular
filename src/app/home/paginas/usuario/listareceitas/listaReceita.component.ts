import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from '../../../models/receita.model';
import { UsuarioService } from '../../../services/usuario.service';
import {ReceitaService} from "../../../services/receita.service";

@Component({
  selector: 'app-listareceitas',
  templateUrl: './listareceita.component.html',
  styleUrls: ['./listareceita.component.css']
})
export class ListaReceitaComponent implements OnInit {

   array = [1, 2, 3, 4, 5];
   currentIndex = -1;


  receita: Receita = {
     receita_categoria: '',
     receita_ingredientes: '',
     receita_nome: '',
     receita_porcoes: '',
     receita_tempodepreparo:''
   };

  receitas?: Receita[];
   constructor(
     private ReceitaService: ReceitaService,
     private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
     this.getReceitaById(this.route.snapshot.params["receitaId"]);
   }

   getReceitaById(id: string) {
     this.ReceitaService.loadById(id).subscribe({
       next: (data: Receita) => {
         this.receita = data;
         console.log(data);
       },
       error: (e: any) => console.error(e)
     });
   }
 }
