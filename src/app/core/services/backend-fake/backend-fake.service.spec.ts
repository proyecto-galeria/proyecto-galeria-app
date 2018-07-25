import { TestBed, inject } from '@angular/core/testing';

import { BackendFakeService } from './backend-fake.service';

describe('BackendFakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendFakeService]
    });
  });

  it('should be created', inject([BackendFakeService], (service: BackendFakeService) => {
    expect(service).toBeTruthy();
  }));
});
