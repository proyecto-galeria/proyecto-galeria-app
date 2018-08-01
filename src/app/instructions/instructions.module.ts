import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructionsRoutingModule } from './instructions-routing.module';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { InstructionDetailComponent } from './instruction-detail/instruction-detail.component';

@NgModule({
  imports: [
    CommonModule,
    InstructionsRoutingModule
  ],
  declarations: [InstructionListComponent, InstructionDetailComponent]
})
export class InstructionsModule { }
