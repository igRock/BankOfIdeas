import { Injectable } from '@angular/core';
import { IdeaService } from '../services/idea.service';
import { IdeaItem } from '../models/idea-item.model';

@Injectable()
export class LikeService {

  constructor(private ideaService: IdeaService) { }

  onLike(ideaItem: IdeaItem, newLiker){
      
    if (ideaItem.likers.indexOf(newLiker) == -1) {
      ideaItem.likes = ideaItem.likes + 1;
      ideaItem.likers.push(newLiker);
      this.ideaService.updateIdea(ideaItem);
    } else {
      let index = ideaItem.likers.indexOf(newLiker);

      ideaItem.likes = ideaItem.likes - 1;
      ideaItem.likers.splice(index, 1);
      this.ideaService.updateIdea(ideaItem);
    }
  }
  onDislike(ideaItem: IdeaItem, newDisliker){
      
    if (ideaItem.dislikers.indexOf(newDisliker) == -1) {
      ideaItem.dislikes = ideaItem.dislikes + 1;
      ideaItem.dislikers.push(newDisliker);
      this.ideaService.updateIdea(ideaItem);
    } else {
      let index = ideaItem.dislikers.indexOf(newDisliker);

      ideaItem.dislikes = ideaItem.dislikes - 1;
      ideaItem.dislikers.splice(index, 1);
      this.ideaService.updateIdea(ideaItem);
    }
  }
}
