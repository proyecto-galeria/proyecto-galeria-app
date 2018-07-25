import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsRoutingModule } from "./records-routing.module";
import { RecordNewComponent } from './record-new/record-new.component';

@NgModule({
  imports: [
    CommonModule,
    RecordsRoutingModule
  ],
  declarations: [RecordNewComponent],
  exports: [RecordNewComponent]
})

export class RecordsModule { }
