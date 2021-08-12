import { TestBed } from '@angular/core/testing';

import { BrLibComponentsService } from './br-lib-components.service';

describe('BrLibComponentsService', () => {
  let service: BrLibComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrLibComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
