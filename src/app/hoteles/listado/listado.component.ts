import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
  
})
export class ListadoComponent implements OnInit {
listadoHoteles:Array<string>;
  constructor() { 
    
    this.listadoHoteles = [
        'InterContinental',
        'Hotel Windsor',
        'Torre de Cali Plaza Hotel',
        'Hotel Roosevelt Plaza',
        'Spiwak Chipichape',
        'Nh Cali'
      ];
    
  }

  ngOnInit() {
  }

}
