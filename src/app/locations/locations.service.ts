import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Location } from "../shared/models/location.model";

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private endpointUrl: string = 'api/locations';

  constructor(private http: HttpClient) { }


  fetchLocations(): Observable<Location[]> {

    return this.http
      .get<Location[]>(`${this.endpointUrl}/`)

  }

  fetchLocation( location_id: number ): Observable<Location> {

    return this.http
    .get<Location>(`${this.endpointUrl}/${location_id}/`)
    
  }

}
