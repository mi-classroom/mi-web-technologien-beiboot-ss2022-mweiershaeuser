import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ExploreComponent } from './explore.component';
import { MasterpiecesApiService } from './services/masterpieces/masterpieces.api.service';
import { MasterpiecesApiServiceMock } from './services/masterpieces/masterpieces.api.service.mock';

describe('ExploreComponent', () => {
  let component: ExploreComponent;
  let fixture: ComponentFixture<ExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreComponent],
      providers: [
        {
          provide: MasterpiecesApiService,
          useClass: MasterpiecesApiServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
