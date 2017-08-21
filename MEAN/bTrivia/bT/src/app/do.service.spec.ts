import { TestBed, inject } from '@angular/core/testing';

import { DoService } from './do.service';

describe('DoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoService]
    });
  });

  it('should be created', inject([DoService], (service: DoService) => {
    expect(service).toBeTruthy();
  }));
});
