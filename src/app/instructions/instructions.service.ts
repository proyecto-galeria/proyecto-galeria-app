import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Instruction } from "../shared/models/instruction.model";

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InstructionsService {

  private endpointUrl: string = 'api/instructions';

  constructor(private http: HttpClient) { }


  fetchInstructions(): Observable<Instruction[]> {

    return this.http
      .get<Instruction[]>(`${this.endpointUrl}/`)

  }

  fetchInstruction( instruction_id: number ): Observable<Instruction> {

    return this.http
    .get<Instruction>(`${this.endpointUrl}/${instruction_id}/`)
    
  }

}
