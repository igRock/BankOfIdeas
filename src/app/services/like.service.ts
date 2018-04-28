import { Injectable } from '@angular/core';
import { IdeaService } from '../services/idea.service';
import { IdeaItem } from '../models/idea-item.model';

@Injectable()
export class LikeService {

  constructor(private ideaService: IdeaService) { }

  onLike(ideaItem: IdeaItem, onlineUser){
    let indexOfLiker = ideaItem.likers.indexOf(onlineUser);
    let indexOfDisliker = ideaItem.dislikers.indexOf(onlineUser);

    if ((indexOfLiker == -1) && (indexOfDisliker == -1)) {
      ideaItem.likers.push(onlineUser);
    } else if (indexOfLiker && (indexOfDisliker == -1)) {
      ideaItem.likers.splice(indexOfLiker, 1);
    } else {
      ideaItem.dislikers.splice(indexOfDisliker, 1);
      ideaItem.likers.push(onlineUser);
    }
    this.ideaService.updateIdea(ideaItem);
  }

  onDislike(ideaItem: IdeaItem, onlineUser){
    let indexOfLiker = ideaItem.likers.indexOf(onlineUser);
    let indexOfDisliker = ideaItem.dislikers.indexOf(onlineUser);

    if ((indexOfLiker == -1) && (indexOfDisliker == -1)) {
      ideaItem.dislikers.push(onlineUser);

    } else if (indexOfLiker && (indexOfDisliker == -1)) {
      ideaItem.likers.splice(indexOfLiker, 1);
      ideaItem.dislikers.push(onlineUser);
    } else {
      ideaItem.dislikers.splice(indexOfDisliker, 1);
    }
    this.ideaService.updateIdea(ideaItem);
  }
}
