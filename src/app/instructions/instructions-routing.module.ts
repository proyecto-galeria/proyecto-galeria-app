import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionListComponent } from "./instruction-list/instruction-list.component";
import { InstructionDetailComponent } from "./instruction-detail/instruction-detail.component";
import { InstructionListResolver } from './instruction-list/instruction-list.resolver';

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
        path: ':instruction_id',
        component: InstructionDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    InstructionListResolver
  ]
})
export class InstructionsRoutingModule { }
