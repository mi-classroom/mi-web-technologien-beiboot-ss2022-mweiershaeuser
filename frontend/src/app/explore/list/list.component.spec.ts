import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterpiecesApiService } from '../services/masterpieces/masterpieces.api.service';
import { MasterpiecesApiServiceMock } from '../services/masterpieces/masterpieces.api.service.mock';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [
        {
          provide: MasterpiecesApiService,
          useClass: MasterpiecesApiServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
