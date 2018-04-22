import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasFeedComponent } from './ideas-feed.component';

describe('IdeasFeedComponent', () => {
  let component: IdeasFeedComponent;
  let fixture: ComponentFixture<IdeasFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
