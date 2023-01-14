import { TestBed } from '@angular/core/testing';

import { KnowtifiedServiceService } from './knowtified-service.service';

describe('KnowtifiedServiceService', () => {
  let service: KnowtifiedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowtifiedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
