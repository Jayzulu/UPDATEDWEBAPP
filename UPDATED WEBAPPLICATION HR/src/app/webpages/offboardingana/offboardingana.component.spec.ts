import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffboardinganaComponent } from './offboardingana.component';

describe('OffboardinganaComponent', () => {
  let component: OffboardinganaComponent;
  let fixture: ComponentFixture<OffboardinganaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffboardinganaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffboardinganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
