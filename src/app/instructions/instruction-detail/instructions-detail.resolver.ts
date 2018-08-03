import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Instruction } from '../../shared/models/instruction.model';
import { InstructionsService } from '../instructions.service';


import { Observable } from 'rxjs';



@Injectable()
export class InstructionDetailResolver implements Resolve<Observable<Instruction>> {

  constructor( private instructionService: InstructionsService ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Instruction> {
   
    return this.instructionService.fetchInstruction(route.params['instruction_id']);
  
  }
  
}