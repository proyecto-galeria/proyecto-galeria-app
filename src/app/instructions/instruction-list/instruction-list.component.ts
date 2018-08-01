import { Component, OnInit } from '@angular/core';
// import { Router } from "@angular/router";

import { ActivatedRoute } from "@angular/router";


import { InstructionsService } from "../instructions.service";
import { Instruction } from '../../shared/models/instruction.model';


@Component({
  selector: 'instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.css']
})
export class InstructionListComponent implements OnInit {

  public instructions: Instruction[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // obtener listado de instructions
    this.instructions = this.route.snapshot.data['instructions'] || {};
    
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
