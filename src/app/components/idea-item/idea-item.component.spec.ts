import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeService } from '../../services/like.service';

import { IdeaItemComponent } from './idea-item.component';
import { IdeaItem } from '../../models/idea-item.model';

describe('IdeaItemComponent', () => {
  let ideaItemTest: IdeaItemComponent;
  let fixture: ComponentFixture<IdeaItemComponent>;
  let testIdea : IdeaItem = {
    email : 'test@test.ru',
    userName : 'testName',
    title : 'testTitle',
    description: 'testDescription',
    topic : 'testTopic',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaItemComponent ],
      providers : [ LikeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaItemComponent);
    ideaItemTest = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(ideaItemTest).toBeTruthy();
  });

  describe('editIdea()', () => {
    it('1. should turn editState on', () => {
      ideaItemTest.editIdea(event, testIdea);
      expect(ideaItemTest.editState).toBeTruthy();
    });

    it('2. should create an ideaItem', () => {
      ideaItemTest.editIdea(event, testIdea);
      expect(ideaItemTest.ideaItem.email).toEqual('test@test.ru');
      expect(ideaItemTest.ideaItem.userName).toEqual('testName');
      expect(ideaItemTest.ideaItem.title).toEqual('testTitle');
      expect(ideaItemTest.ideaItem.description).toEqual('testDescription');
      expect(ideaItemTest.ideaItem.topic).toEqual('testTopic');
    });
  });

  describe('updateIdea()', () => {
    it('1. should turn editState off', () => {
      ideaItemTest.updateIdea(testIdea);
      expect(ideaItemTest.editState).toBeFalsy();
    });

    it('2. should make ideaToEdit to be Null', () => {
      ideaItemTest.updateIdea(testIdea);
      expect(ideaItemTest.ideaToEdit).toBeNull();
    });

    it('3. should update an ideaItem properties', () => {
      ideaItemTest.updateIdea(testIdea);
      expect(ideaItemTest.ideaItem.title).toEqual('testTitle');
      expect(ideaItemTest.ideaItem.description).toEqual('testDescription');
      expect(ideaItemTest.ideaItem.topic).toEqual('testTopic');
    });
  });

  describe('deleteIdea()', () => {
    it('1. should turn editState off', () => {
      ideaItemTest.deleteIdea(event, testIdea);
      expect(ideaItemTest.editState).toBeFalsy();
    });

    it('2. should make ideaToEdit to be Null', () => {
      ideaItemTest.deleteIdea(event, testIdea);
      expect(ideaItemTest.ideaToEdit).toBeNull();
    });
  });

  describe('clearState()', () => {
    it('1. should turn editState off', () => {
      ideaItemTest.clearState();
      expect(ideaItemTest.editState).toBeFalsy();
    });

    it('2. should make ideaToEdit to be Null', () => {
      ideaItemTest.clearState();
      expect(ideaItemTest.ideaToEdit).toBeNull();
    });
  });
});
