//Importar NGmodule de core angular

import {NgModule} from '@angular/core';

//importar rutas y el modulas 
import {Routes, RouterModule} from '@angular/router';

import {InicioComponent} from './pages/inicio/inicio.component';
import {AcercadeComponent} from './pages/acercade/acercade.component';
import {ContactoComponent} from './pages/contacto/contacto.component';
import {ListadoComponent} from './hoteles/listado/listado.component';
import {DetallesComponent} from './hoteles/detalles/detalles.component';

const app_route:Routes=[
    { path: 'home', component: InicioComponent},
    { path: 'acercade', component: AcercadeComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'listado', component: ListadoComponent},
    { path: 'detalles', component: DetallesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
    ];
    
    
@NgModule({
    imports:[
        RouterModule.forRoot(app_route, {useHash:true})     
    ],
        
    exports:[
        RouterModule
    ],
})


export class AppRoutingModule{}