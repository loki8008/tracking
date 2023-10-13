import { TestBed } from '@angular/core/testing';

import { OpenDialogsService } from './open-dialogs.service';

describe('OpenDialogsService', () => {
  let service: OpenDialogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenDialogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
