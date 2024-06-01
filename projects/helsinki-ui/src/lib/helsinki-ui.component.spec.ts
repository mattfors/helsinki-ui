import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelsinkiUiComponent } from './helsinki-ui.component';

describe('HelsinkiUiComponent', () => {
  let component: HelsinkiUiComponent;
  let fixture: ComponentFixture<HelsinkiUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelsinkiUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelsinkiUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
