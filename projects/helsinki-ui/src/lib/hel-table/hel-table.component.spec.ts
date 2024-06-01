import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelTableComponent } from './hel-table.component';

describe('HelTableComponent', () => {
  let component: HelTableComponent;
  let fixture: ComponentFixture<HelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
