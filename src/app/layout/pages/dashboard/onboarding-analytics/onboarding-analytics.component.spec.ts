import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingAnalyticsComponent } from './onboarding-analytics.component';

describe('OnboardingAnalyticsComponent', () => {
  let component: OnboardingAnalyticsComponent;
  let fixture: ComponentFixture<OnboardingAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnboardingAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
