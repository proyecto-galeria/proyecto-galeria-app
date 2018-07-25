import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordNewComponent } from "./record-new/record-new.component";

const routes: Routes = [
  {
    path: 'nuevo-registro',
    component: RecordNewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
