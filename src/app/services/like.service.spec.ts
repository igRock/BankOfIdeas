import { TestBed, inject } from '@angular/core/testing';
import { IdeaItem } from '../models/idea-item.model';
import { LikeService } from './like.service';

describe('LikeService', () => {
  const testIdea : IdeaItem = {
    email : 'author@email.ru',
    userName : 'testName',
    title : 'testTitle',
    description: 'testDescription',
    topic : 'testTopic',
    likers : ['author@email.ru'],
    dislikers : ['author@email.ru']
  };
  const testUserEmail = 'test@email.ru';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeService]
    });
  });

  it('should be created', inject([LikeService], (service: LikeService) => {
    expect(service).toBeTruthy();
  }));
});
