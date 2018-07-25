import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Record } from "./record.model";

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private endpointUrl: string = 'api/records';

  constructor(private http: HttpClient) { }


  fetchRecords(): Observable<Record[]> {

    return this.http
      .get<Record[]>(`${this.endpointUrl}/`)

  }

  fetchRecord( record_id: number ): Observable<Record> {

    return this.http
    .get<Record>(`${this.endpointUrl}/${record_id}/`)
    
  }
}
