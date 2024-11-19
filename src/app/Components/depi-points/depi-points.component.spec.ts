import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepiPointsComponent } from './depi-points.component';

describe('DepiPointsComponent', () => {
  let component: DepiPointsComponent;
  let fixture: ComponentFixture<DepiPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepiPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepiPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
