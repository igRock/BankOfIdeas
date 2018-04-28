import { Component, OnInit, Input } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import { AuthService } from '../../services/auth.service';
import { LikeService } from '../../services/like.service';
import { IdeaItem } from '../../models/idea-item.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-idea-item',
  templateUrl: './idea-item.component.html',
  styleUrls: ['./idea-item.component.css']
})
export class IdeaItemComponent implements OnInit {

  @Input() ideaItem: IdeaItem;
  userEmail: string;
  userName: string;
  ideaTitle: string;
  ideaTopic: string;
  ideaDescription: string;
  timeStamp: any;
  isOwnIdea: boolean;
  ownEmail: string;
  ideaToEdit: IdeaItem;
  editState: boolean = false;

  likes: number;
  dislikes: number;

  user: Observable<firebase.User>;
  onlineUser: string;

  onLikeButton(ideaItem: IdeaItem) {
    this.likeService.onLike(ideaItem, this.onlineUser);
  }

  onDislikeButton(ideaItem: IdeaItem){
    this.likeService.onDislike(ideaItem, this.onlineUser);
  }

  constructor(private authService: AuthService, private ideaService: IdeaService, private likeService: LikeService) {
    authService.authUser().subscribe(user => {
      this.ownEmail = user.email;
      this.isOwnIdea = this.ownEmail === this.userEmail;
    });
  }

  ngOnInit(ideaItem = this.ideaItem) {
    this.ideaTitle = ideaItem.title;
    this.ideaTopic = ideaItem.topic;
    this.ideaDescription = ideaItem.description;
    this.timeStamp = ideaItem.timeStamp;
    this.userEmail = ideaItem.email;
    this.userName = ideaItem.userName;
    this.likes = ideaItem.likers.length - 1;
    this.dislikes = ideaItem.dislikers.length - 1;

    this.user = this.authService.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.onlineUser = user.email;
      }
    });
  }

  editIdea(event, ideaItem: IdeaItem) {
    this.editState = true;
    this.ideaToEdit = ideaItem;
  }

  updateIdea(ideaItem: IdeaItem) {
    this.ideaItem.title = this.ideaTitle;
    this.ideaItem.topic = this.ideaTopic;
    this.ideaItem.description = this.ideaDescription;
    
    this.ideaService.updateIdea(this.ideaItem);
    this.clearState();
  }

  deleteIdea(event, ideaItem: IdeaItem) {
    this.clearState();
    this.ideaService.deleteIdea(ideaItem);
  }
  
  clearState(){
    this.editState = false;
    this.ideaToEdit = null;
  } 
}
