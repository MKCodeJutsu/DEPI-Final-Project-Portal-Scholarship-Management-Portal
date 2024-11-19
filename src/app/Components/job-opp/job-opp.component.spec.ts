import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOppComponent } from './job-opp.component';

describe('JobOppComponent', () => {
  let component: JobOppComponent;
  let fixture: ComponentFixture<JobOppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
