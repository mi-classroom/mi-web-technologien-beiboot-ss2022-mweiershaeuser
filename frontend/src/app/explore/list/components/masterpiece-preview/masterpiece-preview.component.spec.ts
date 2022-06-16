import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpiecePreviewComponent } from './masterpiece-preview.component';

describe('MasterpiecePreviewComponent', () => {
  let component: MasterpiecePreviewComponent;
  let fixture: ComponentFixture<MasterpiecePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterpiecePreviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpiecePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
