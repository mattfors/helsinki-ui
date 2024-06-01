import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelStepperComponent } from './hel-stepper.component';

describe('StepperComponent', () => {
  let component: HelStepperComponent;
  let fixture: ComponentFixture<HelStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
