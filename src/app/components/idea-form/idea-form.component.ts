import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../../services/idea.service';
import { IdeaItem } from '../../models/idea-item.model';


@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {
  isAnonymous: boolean;
  
  idea: IdeaItem = {
    title: '',
    topic: '',
    description: ''
  }
  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.idea.title !== '' && this.idea.topic !== '' && this.idea.description !== '') {
      this.ideaService.addIdea(this.idea, this.isAnonymous);
      this.idea.title='';
      this.idea.topic='';
      this.idea.description='';
      this.isAnonymous = false;
    }
  }

}
