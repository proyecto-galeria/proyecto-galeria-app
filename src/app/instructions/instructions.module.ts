import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructionsRoutingModule } from './instructions-routing.module';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { InstructionDetailComponent } from './instruction-detail/instruction-detail.component';
import { InstructionsService } from './instructions.service';

@NgModule({
  imports: [
    CommonModule,
    InstructionsRoutingModule
  ],
  declarations: [InstructionListComponent, InstructionDetailComponent],
  providers: [InstructionsService]
})
export class InstructionsModule { }
