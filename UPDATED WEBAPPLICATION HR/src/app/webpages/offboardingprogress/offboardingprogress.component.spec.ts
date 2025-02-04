import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardingprogressComponent } from './offboardingprogress.component';

describe('OffboardingprogressComponent', () => {
  let component: OffboardingprogressComponent;
  let fixture: ComponentFixture<OffboardingprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffboardingprogressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffboardingprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
