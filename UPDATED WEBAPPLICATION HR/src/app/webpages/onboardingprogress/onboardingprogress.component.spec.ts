import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingprogressComponent } from './onboardingprogress.component';

describe('OnboardingprogressComponent', () => {
  let component: OnboardingprogressComponent;
  let fixture: ComponentFixture<OnboardingprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingprogressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
