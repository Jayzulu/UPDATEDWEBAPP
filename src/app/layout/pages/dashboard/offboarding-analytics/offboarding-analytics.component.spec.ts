import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardingAnalyticsComponent } from './offboarding-analytics.component';

describe('OffboardingAnalyticsComponent', () => {
  let component: OffboardingAnalyticsComponent;
  let fixture: ComponentFixture<OffboardingAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffboardingAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffboardingAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
