import { TestBed } from '@angular/core/testing';

import { QAServiceService } from './qaservice.service';

describe('QAServiceService', () => {
  let service: QAServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QAServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
