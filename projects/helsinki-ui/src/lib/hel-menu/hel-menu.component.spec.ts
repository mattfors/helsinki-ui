import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelMenuComponent } from './hel-menu.component';

describe('HelMenuComponent', () => {
  let component: HelMenuComponent;
  let fixture: ComponentFixture<HelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
