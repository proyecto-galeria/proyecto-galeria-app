import { Component, OnInit } from '@angular/core';
// import { Router } from "@angular/router";

import { ActivatedRoute } from "@angular/router";


import { InstructionsService } from "../instructions.service";
import { Instruction } from '../../shared/models/instruction.model';
import { ConceptsService } from '../../concepts/concepts.service';
import { LocationsService } from '../../locations/locations.service';


@Component({
  selector: 'instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.css']
})
export class InstructionListComponent implements OnInit {

  public instructions: Instruction[];
  public instructionList: Instruction[];

  constructor(
    private route: ActivatedRoute,
    private conceptsService: ConceptsService,
    private locationsService: LocationsService,
    private instructionsService: InstructionsService
  ) { }

  ngOnInit() {

    // obtener listado de instructions
    this.instructions = this.route.snapshot.data['instructions'] || {};

    this.instructions.map( instruction => {
      this.conceptsService.fetchConcept(instruction.concept)
      .subscribe( concept => {
        this.locationsService.fetchLocation(concept.location).subscribe(
          location => {
            concept.location_object = location;
            instruction.concept_object = concept 
          }
        )
      });
    })



      // this.instructionsService.fetchInstructions()
      // .subscribe( instructions => {
      //   console.log('instructions: ', instructions);
        
      //   this.instructionList = instructions
      //   console.log('instructionlist: ', this.instructionList);
      // });
    
  }
  

  // manera de hacerlo sin resolvedores, haciendo llamada dentro de este componente:

  // constructor( private instructionsService: InstructionsService ) { }

  // ngOnInit() {
  //   this.instructionsService.fetchInstructions()
  //     .subscribe( instructions => {
  //       console.log(instructions);
        
  //       this.instructionList = instructions
  //     });
  // }

}
