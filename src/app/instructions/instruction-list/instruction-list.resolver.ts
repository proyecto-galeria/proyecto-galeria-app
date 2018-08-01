import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Instruction } from '../../shared/models/instruction.model';
import { InstructionsService } from '../instructions.service';


import { Observable } from 'rxjs';



@Injectable()
export class InstructionListResolver implements Resolve<Observable<Instruction[]>> {

  constructor( private instructionsService: InstructionsService ) { }

  resolve(): Observable<Instruction[]> {
   
    return this.instructionsService.fetchInstructions();
  
  }
  
}