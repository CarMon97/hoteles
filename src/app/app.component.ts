import { Component } from '@angular/core';

import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'pepepig',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PEPAPIG';
  subtitle ="Este es un subtitulo";
  
  /* asasas */
  //sdsd
  numero:number = 4;
  nombre:string ="cadena";
 
 constructor(public InfoPaginaService:InfoPaginaService){
   
 }
  
}
