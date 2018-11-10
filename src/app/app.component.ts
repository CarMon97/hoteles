import { Component } from '@angular/core';

import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'pepapig',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PEPAPIG';
  subtitulo ="En el pais de las maravillas";
  
  constructor(public infoPaginaService:InfoPaginaService){
    
  }
  
}
