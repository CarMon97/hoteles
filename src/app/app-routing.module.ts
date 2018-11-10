import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { LoginComponent } from './shared/login/login.component';

const app_routes:Routes=[
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes-somos', component: AcercadeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo:'inicio' }
];


@NgModule({
  
  imports:[
      RouterModule.forRoot(app_routes, {useHash:true} )
  ],
  exports:[
      RouterModule
  ]
  
})

export class AppRoutingModule{ }
      
      
      