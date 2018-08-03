import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Concept } from "../shared/models/concept.model";

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConceptsService {

  private endpointUrl: string = 'api/concepts';

  constructor(private http: HttpClient) { }


  fetchConcepts(): Observable<Concept[]> {

    return this.http
      .get<Concept[]>(`${this.endpointUrl}/`)

  }

  fetchConcept( concept_id: number ): Observable<Concept> {

    return this.http
    .get<Concept>(`${this.endpointUrl}/${concept_id}/`)
    
  }

}
