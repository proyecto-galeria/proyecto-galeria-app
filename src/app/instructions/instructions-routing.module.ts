import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionListComponent } from "./instruction-list/instruction-list.component";
import { InstructionDetailComponent } from "./instruction-detail/instruction-detail.component";

import { InstructionDetailResolver } from './instruction-detail/instruction-detail.resolver';
import { InstructionListResolver } from './instruction-list/instruction-list.resolver';
import { InstructionNewComponent } from './instruction-new/instruction-new.component';

const routes: Routes = [
  {
    path: 'instrucciones',
    children: [
      {
        path: '',
        component: InstructionListComponent,
        resolve: {
          instructions: InstructionListResolver
        }
        // children: [
        // ]
      },
      {
        path: 'new',
        component: InstructionNewComponent,
        // resolve: {
        //   instructions: InstructionListResolver
        // }
        // children: [
        // ]
      },
      {
        path: ':instruction_id',
        component: InstructionDetailComponent,
        resolve: {
          instruction: InstructionDetailResolver
        }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    InstructionDetailResolver,
    InstructionListResolver
  ]
})
export class InstructionsRoutingModule { }
