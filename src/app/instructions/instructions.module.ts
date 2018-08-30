import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructionsRoutingModule } from './instructions-routing.module';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { InstructionDetailComponent } from './instruction-detail/instruction-detail.component';
import { InstructionsService } from './instructions.service';
import { SharedModule } from '../shared/shared.module';
import { InstructionNewComponent } from './instruction-new/instruction-new.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InstructionsRoutingModule
  ],
  declarations: [InstructionListComponent, InstructionDetailComponent, InstructionNewComponent],
  providers: [InstructionsService]
})
export class InstructionsModule { }
