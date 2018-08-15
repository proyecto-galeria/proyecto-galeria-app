import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Record } from "../shared/models/record.model";

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private endpointUrl: string = 'http://localhost:3000/api/records';
  

  constructor(private http: HttpClient) { }


  fetchRecords(): Observable<Record[]> {

    return this.http
      .get<Record[]>(`${this.endpointUrl}/`)

  }

  fetchRecord( record_id: number ): Observable<Record> {

    return this.http
    .get<Record>(`${this.endpointUrl}/${record_id}/`)
    
  }

  addRecord (record: Record): Observable<Record> {
    return this.http.post<Record>(this.endpointUrl, record, httpOptions)
      .pipe(
        // FRENK
        // catchError(this.handleError('addRecord', record))
        console.log()
      );
  }

}
