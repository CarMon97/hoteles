import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  btnIniciarSesion:string;
  btnHoteles:string;
  btnCategorias:Array<string>;
  constructor() {
    
    this.btnIniciarSesion="Inciar Sesion";
    
    this.btnHoteles = "Tipos Hoteles";
    
    this.btnCategorias = [
      'Una Estrella',
      'Dos Estrellas',
      'Tres Estrellas',
      'Cuatro Estrellas',
      'Cinco Estrellas'
      ];
  }

  ngOnInit() {
  }

}
