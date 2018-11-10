import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  
  hoteles : any[] = [];
  
  constructor( private http: HttpClient ) {
    
    this.cargarinfo();
    this.cargaHoteles();
    
  }
  
  private cargarinfo(){
    console.log("info pagina cargada");
    
    //leer JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;
          console.log(resp);

    });
  }
  
  private cargaHoteles(){
    
    //leer JSON
    this.http.get('https://reservation-3615a.firebaseio.com/hoteles.json')
    .subscribe( (resp: any[]) => {

          this.hoteles = resp;
          console.log(resp);

    });
  }
  
}
