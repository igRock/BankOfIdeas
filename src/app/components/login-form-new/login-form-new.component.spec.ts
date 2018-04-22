import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormNewComponent } from './login-form-new.component';

describe('LoginFormNewComponent', () => {
  let component: LoginFormNewComponent;
  let fixture: ComponentFixture<LoginFormNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
