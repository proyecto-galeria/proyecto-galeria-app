import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordNewComponent } from './record-new/record-new.component';
import { RecordsRoutingModule } from "./records-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RecordsRoutingModule
  ],
  declarations: [RecordNewComponent],
  exports: []
})

export class RecordsModule { }
