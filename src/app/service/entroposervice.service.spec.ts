import { TestBed } from '@angular/core/testing';

import { EntroposerviceService } from './entroposervice.service';

describe('EntroposerviceService', () => {
  let service: EntroposerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntroposerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
