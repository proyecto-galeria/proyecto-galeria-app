import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Record } from '../record.model';
import { RecordsService } from '../records.service';


import { Observable } from 'rxjs';



@Injectable()
export class RecordDetailResolver implements Resolve<Observable<Record>> {

  constructor( private recordService: RecordsService ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Record> {
   
    return this.recordService.fetchRecord(route.params['record_id']);
  
  }
  
}