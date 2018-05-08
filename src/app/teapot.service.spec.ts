import { TestBed, inject } from '@angular/core/testing';

import { TeapotService } from './teapot.service';

describe('TeapotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeapotService]
    });
  });

  it('should be created', inject([TeapotService], (service: TeapotService) => {
    expect(service).toBeTruthy();
  }));
});
