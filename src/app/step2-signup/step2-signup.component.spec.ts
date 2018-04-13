import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2SignupComponent } from './step2-signup.component';

describe('Step2SignupComponent', () => {
  let component: Step2SignupComponent;
  let fixture: ComponentFixture<Step2SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
