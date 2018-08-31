import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Instruction } from "../shared/models/instruction.model";

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InstructionsService {

  private endpointUrl: string = 'http://localhost:3000/api/instructions';

  private currentInstruction: number; 

  constructor(private http: HttpClient) { }


  fetchInstructions(): Observable<Instruction[]> {
      let inst = this.http.get<Instruction[]>(`${this.endpointUrl}/`)

      
    return inst

  }

  fetchInstruction( instruction_id: number ): Observable<Instruction> {

    return this.http
    .get<Instruction>(`${this.endpointUrl}/${instruction_id}/`)
    
  }


  // setCurrentInstruction( instruction_id: number ) {

  //   this.currentInstruction = instruction_id;

  // }

}
