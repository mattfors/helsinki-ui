import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelStepperPanelComponent } from './hel-stepper-panel.component';

describe('HelStepperPanelComponent', () => {
  let component: HelStepperPanelComponent;
  let fixture: ComponentFixture<HelStepperPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelStepperPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelStepperPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
