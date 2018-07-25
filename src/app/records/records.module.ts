import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsRoutingModule } from "./records-routing.module";
import { RecordNewComponent } from './record-new/record-new.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { RecordListComponent } from './record-list/record-list.component';

@NgModule({
  imports: [
    CommonModule,
    RecordsRoutingModule
  ],
  declarations: [RecordNewComponent, RecordDetailComponent, RecordListComponent],
  exports: [RecordNewComponent]
})

export class RecordsModule { }
