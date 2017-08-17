import { TestBed, inject } from '@angular/core/testing';

import { AddUsersService } from './add-users.service';

describe('AddUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddUsersService]
    });
  });

  it('should be created', inject([AddUsersService], (service: AddUsersService) => {
    expect(service).toBeTruthy();
  }));
});
