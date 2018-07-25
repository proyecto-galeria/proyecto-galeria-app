import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AppComponent } from './app.component';


import { RecordsModule } from './records/records.module';

import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';



const routes: Routes = [

  {
    path: '',
    component: HomePageComponent    
  },

  {
    path: 'nuevo-registro',
    loadChildren: './records/records.module#RecordsModule'
  },

  {
    path: '**', component: NotFoundComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  providers: []
})

export class AppRoutingModule { }