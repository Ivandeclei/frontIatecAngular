import { TestBed } from '@angular/core/testing';

import { GetDataHomeService } from './get-data-home.service';

describe('GetDataHomeService', () => {
  let service: GetDataHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
