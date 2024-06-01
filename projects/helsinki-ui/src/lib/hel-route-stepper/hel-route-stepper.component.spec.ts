import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelRouteStepperComponent } from './hel-route-stepper.component';

describe('HelRouteStepperComponent', () => {
  let component: HelRouteStepperComponent;
  let fixture: ComponentFixture<HelRouteStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelRouteStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelRouteStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
