import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordNewComponent } from "./record-new/record-new.component";
import { RecordDetailComponent } from "./record-detail/record-detail.component";
import { RecordListComponent } from "./record-list/record-list.component";

import { RecordListResolver } from './record-list/record-list.resolver';
import { RecordDetailResolver } from './record-detail/record-detail.resolver';

const routes: Routes = [
  {
    path: 'nuevo-registro',
    component: RecordNewComponent
  },
  {
    path: 'registro/:record_id',
    component: RecordDetailComponent,
    resolve: {
      record: RecordDetailResolver
    }
  },
  {
    path: 'registros',
    component: RecordListComponent,
    resolve: {
      records: RecordListResolver
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    RecordDetailResolver,
    RecordListResolver
  ]
})
export class RecordsRoutingModule { }
