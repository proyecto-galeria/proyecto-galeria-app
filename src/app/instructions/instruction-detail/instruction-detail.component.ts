import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConceptsService } from '../../concepts/concepts.service';
import { Instruction } from '../../shared/models/instruction.model';

@Component({
  selector: 'instruction-detail',
  templateUrl: './instruction-detail.component.html',
  styleUrls: ['./instruction-detail.component.css']
})
export class InstructionDetailComponent implements OnInit {

  public instruction: Instruction;

  constructor(
    private route: ActivatedRoute,
    private conceptsService: ConceptsService,
  ) { }

  ngOnInit() {

    this.instruction = this.route.snapshot.data['instruction'] || {};
    
    this.conceptsService.fetchConcept(this.instruction.concept)
    .subscribe( concept => this.instruction.concept_object = concept );

  }

}
