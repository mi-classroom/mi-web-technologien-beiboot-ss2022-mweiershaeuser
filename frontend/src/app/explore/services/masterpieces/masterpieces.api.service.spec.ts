import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MasterpiecesApiService } from './masterpieces.api.service';

describe('MasterpiecesApiService', () => {
  let service: MasterpiecesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MasterpiecesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
