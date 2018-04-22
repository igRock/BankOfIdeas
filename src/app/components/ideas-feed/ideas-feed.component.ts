import { Component, OnInit, OnChanges } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import { Observable } from 'rxjs/Observable';
import { IdeaItem } from '../../models/idea-item.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ideas-feed',
  templateUrl: './ideas-feed.component.html',
  styleUrls: ['./ideas-feed.component.css']
})
export class IdeasFeedComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<IdeaItem[]>;
  onlineUserEmail: string;

  constructor(private authService: AuthService, private ideaService: IdeaService) {
    authService.authUser().subscribe(user => {
      this.onlineUserEmail = user.email;
    });
  }

  ngOnInit() {
    this.feed = this.ideaService.getIdeas();
  }

  ngOnChanges() {
    this.feed = this.ideaService.getIdeas();
  }
}
