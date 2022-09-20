import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpieceDetailsComponent } from './masterpiece-details.component';

describe('MasterpieceDetailsComponent', () => {
  let component: MasterpieceDetailsComponent;
  let fixture: ComponentFixture<MasterpieceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterpieceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpieceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
