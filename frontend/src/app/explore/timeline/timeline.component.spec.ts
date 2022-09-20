import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterpiecesApiService } from '../services/masterpieces/masterpieces.api.service';
import { MasterpiecesApiServiceMock } from '../services/masterpieces/masterpieces.api.service.mock';

import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineComponent],
      providers: [
        {
          provide: MasterpiecesApiService,
          useClass: MasterpiecesApiServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
