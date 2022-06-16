import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpieceComponent } from './masterpiece.component';

describe('MasterpieceComponent', () => {
  let component: MasterpieceComponent;
  let fixture: ComponentFixture<MasterpieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterpieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
