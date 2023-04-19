import { TestBed } from '@angular/core/testing';

import { DetalisServiceHomeService } from './detalis-service-home.service';

describe('DetalisServiceHomeService', () => {
  let service: DetalisServiceHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalisServiceHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
