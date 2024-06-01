import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelRouteTableComponent } from './hel-route-table.component';

describe('HelRouteTableComponent', () => {
  let component: HelRouteTableComponent;
  let fixture: ComponentFixture<HelRouteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelRouteTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelRouteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
