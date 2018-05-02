import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaFormComponent } from './idea-form.component';

describe('IdeaFormComponent', () => {
  let ideaFormTest: IdeaFormComponent;
  let fixture: ComponentFixture<IdeaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaFormComponent);
    ideaFormTest = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(ideaFormTest).toBeTruthy();
  });
  
  describe('onSubmit()', () => {
    
    it('1. should clear all the forms', () => {
    
      ideaFormTest.onSubmit();

      expect(ideaFormTest.idea.title).toEqual('');
      expect(ideaFormTest.idea.topic).toEqual('');
      expect(ideaFormTest.idea.description).toEqual('');
      expect(ideaFormTest.isAnonymous).toBeFalsy();
    });
  });
});
