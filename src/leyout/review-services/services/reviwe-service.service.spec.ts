import { TestBed } from '@angular/core/testing';

import { ReviweServiceService } from './reviwe-service.service';

describe('ReviweServiceService', () => {
  let service: ReviweServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviweServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
