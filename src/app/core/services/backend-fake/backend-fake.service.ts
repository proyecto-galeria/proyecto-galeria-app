import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { instructions } from "./fake-data/instructions-fake";
import { records } from "./fake-data/records-fake";
import { concepts } from "./fake-data/concepts-fake";
import { locations } from "./fake-data/locations-fake";


@Injectable()
export class BackendFakeService implements InMemoryDbService {
  
  createDb() {
    
    return { 
      
      instructions, 
      records,
      concepts,
      locations

    }

  }
}