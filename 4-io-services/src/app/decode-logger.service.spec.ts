import { TestBed, inject } from '@angular/core/testing';

import { DecodeLoggerService } from './decode-logger.service';

describe('DecodeLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecodeLoggerService]
    });
  });

  it('should be created', inject([DecodeLoggerService], (service: DecodeLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
