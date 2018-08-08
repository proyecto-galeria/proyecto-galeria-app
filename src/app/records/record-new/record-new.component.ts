import { Component, OnInit } from '@angular/core';
import { Instruction } from '../../shared/models/instruction.model';

import { ActivatedRoute } from "@angular/router";
import { ConceptsService } from '../../concepts/concepts.service';
import { LocationsService } from '../../locations/locations.service';

enum RECORD_STATES {
  RECORD_INFO = 0,
  CREATE_PHOTO = 1,
  REVIEW_PHOTO = 2,
  REVIEW_RECORD = 3,
  CHOOSE_RECIPIENTS = 4,
  ADD_EMAILS = 5,
  CONFIRM_SEND = 6,
}


@Component({
  selector: 'record-new',
  templateUrl: './record-new.component.html',
  styleUrls: ['./record-new.component.css']
})
export class RecordNewComponent implements OnInit {

  public currentState;
  public instruction: Instruction;

  constructor(
    private route: ActivatedRoute,
    private conceptsService: ConceptsService,
    private locationsService: LocationsService,
  ) {
    this.currentState = RECORD_STATES.RECORD_INFO;
  }

  ngOnInit() {


    this.instruction = this.route.snapshot.data['instruction'] || {};
        
    this.conceptsService.fetchConcept(this.instruction.concept)
    .subscribe( concept => {
      this.locationsService.fetchLocation(concept.location).subscribe(
        location => {
          concept.location_object = location;
          this.instruction.concept_object = concept 
        }
      )
    });
  }

  changeState( state: number ) {
    this.currentState = state;
  }

  finishForm() {
    this.currentState = RECORD_STATES.CREATE_PHOTO;
  }

}
