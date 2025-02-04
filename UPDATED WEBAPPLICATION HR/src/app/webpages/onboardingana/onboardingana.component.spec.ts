import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardinganaComponent } from './onboardingana.component';

describe('OnboardinganaComponent', () => {
  let component: OnboardinganaComponent;
  let fixture: ComponentFixture<OnboardinganaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardinganaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardinganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
