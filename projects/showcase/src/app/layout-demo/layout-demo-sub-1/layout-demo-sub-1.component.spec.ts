import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDemoSub1Component } from './layout-demo-sub-1.component';

describe('LayoutDemoSub1Component', () => {
  let component: LayoutDemoSub1Component;
  let fixture: ComponentFixture<LayoutDemoSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutDemoSub1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutDemoSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
