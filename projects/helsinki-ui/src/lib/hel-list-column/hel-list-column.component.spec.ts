import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelListColumnComponent } from './hel-list-column.component';

describe('HelListColumnComponent', () => {
  let component: HelListColumnComponent;
  let fixture: ComponentFixture<HelListColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelListColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelListColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
