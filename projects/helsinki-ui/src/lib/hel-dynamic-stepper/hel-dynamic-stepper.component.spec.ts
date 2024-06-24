import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelDynamicStepperComponent } from './hel-dynamic-stepper.component';

describe('HelDynamicStepperComponent', () => {
  let component: HelDynamicStepperComponent;
  let fixture: ComponentFixture<HelDynamicStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelDynamicStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelDynamicStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
