import { TestBed } from '@angular/core/testing';

import { EmpallageService } from './empallage.service';

describe('EmpallageService', () => {
  let service: EmpallageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpallageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
