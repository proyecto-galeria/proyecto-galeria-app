import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { instructions } from "./fake-data/instructions-fake";
import { records } from "./fake-data/records-fake";


@Injectable()
export class BackendFakeService implements InMemoryDbService {
  
  createDb() {
    
    return { 
      
      instructions, 
      records

    }

  }
}