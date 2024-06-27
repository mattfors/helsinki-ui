import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelActionButtonComponent } from './hel-action-button.component';

describe('HelActionButtonComponent', () => {
  let component: HelActionButtonComponent;
  let fixture: ComponentFixture<HelActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelActionButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
