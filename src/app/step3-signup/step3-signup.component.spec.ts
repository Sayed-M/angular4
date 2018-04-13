import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3SignupComponent } from './step3-signup.component';

describe('Step3SignupComponent', () => {
  let component: Step3SignupComponent;
  let fixture: ComponentFixture<Step3SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
