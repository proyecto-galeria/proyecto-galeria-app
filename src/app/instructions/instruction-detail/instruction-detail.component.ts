import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Instruction } from '../../shared/models/instruction.model';
import { ConceptsService } from '../../concepts/concepts.service';

@Component({
  selector: 'instruction-detail',
  templateUrl: './instruction-detail.component.html',
  styleUrls: ['./instruction-detail.component.css']
})
export class InstructionDetailComponent implements OnInit {

  public instruction: Instruction;

  constructor(
    private route: ActivatedRoute,
    private conceptService: ConceptsService,
  ) { }

  ngOnInit() {

    this.instruction = this.route.snapshot.data['instruction'] || {};

    this.conceptService.fetchConcept(this.instruction.concept)
    .subscribe( concept => this.instruction.concept_object = concept );

  }

}
