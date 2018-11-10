import { Component, OnInit } from '@angular/core';

import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public pepaPig:InfoPaginaService) {
    
  }

  ngOnInit() {
  }

}
