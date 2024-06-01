import { TestBed } from '@angular/core/testing';

import { HelsinkiUiService } from './helsinki-ui.service';

describe('HelsinkiUiService', () => {
  let service: HelsinkiUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelsinkiUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
