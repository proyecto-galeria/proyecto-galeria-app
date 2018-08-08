import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsRoutingModule } from "./records-routing.module";
import { RecordNewComponent } from './record-new/record-new.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { RecordListComponent } from './record-list/record-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecordsRoutingModule
  ],
  declarations: [RecordNewComponent, RecordDetailComponent, RecordListComponent],
})

export class RecordsModule { }
