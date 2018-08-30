import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AppComponent } from './app.component';

import { InstructionsModule } from "./instructions/instructions.module";

import { RecordsModule } from './records/records.module';

import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { InstructionListComponent } from './instructions/instruction-list/instruction-list.component';


const routes: Routes = [

  {
    path: '',
    component: HomePageComponent    
  },
  // {
  //   path: '',
  //   component: InstructionListComponent    
  // },

  {
    path: 'instrucciones',
    loadChildren: './instructions/instructions.module#InstructionsModule'
  },

  {
    path: 'nuevo-registro/',
    loadChildren: './records/records.module#RecordsModule'
  },

  {
    path: 'registro/:record_id',
    loadChildren: './records/records.module#RecordsModule'
  },

  {
    path: 'registros',
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