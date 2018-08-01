import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionListComponent } from "./instruction-list/instruction-list.component";
import { InstructionDetailComponent } from "./instruction-detail/instruction-detail.component";

const routes: Routes = [
  {
    path: 'instrucciones',
    children: [
      {
        path: '',
        component: InstructionListComponent,
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
  exports: [RouterModule]
})
export class InstructionsRoutingModule { }
