import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptsRoutingModule } from './concepts-routing.module';
import { ConceptDetailComponent } from './concept-detail/concept-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ConceptsRoutingModule
  ],
  declarations: [ConceptDetailComponent]
})
export class ConceptsModule { }
