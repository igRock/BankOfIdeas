import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormNewComponent } from './signup-form-new.component';

describe('SignupFormNewComponent', () => {
  let component: SignupFormNewComponent;
  let fixture: ComponentFixture<SignupFormNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
