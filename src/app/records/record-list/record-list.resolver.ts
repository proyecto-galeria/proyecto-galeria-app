import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Record } from '../../shared/models/record.model';
import { RecordsService } from '../records.service';


import { Observable } from 'rxjs';



@Injectable()
export class RecordListResolver implements Resolve<Observable<Record[]>> {

  constructor( private recordsService: RecordsService ) { }

  resolve(): Observable<Record[]> {
   
    return this.recordsService.fetchRecords();
  
  }
  
}