import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

import { IdeaItem } from '../models/idea-item.model';

@Injectable()
export class IdeaService {
  user: firebase.User;
  ideas: FirebaseListObservable<IdeaItem[]>;
  userName: Observable<string>;
  
  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
    ) {
        this.afAuth.authState.subscribe(auth => {
          if (auth !== undefined && auth !== null) {
            this.user = auth;
          }

          this.getUser().subscribe(a => {
            this.userName = a.displayName;
          });
        });
    }
    getUser() {
      const userId = this.user.uid;
      const path = `/users/${userId}`;
      return this.db.object(path);
    }
    
    generateNick() {
      const character = ['Active','Ambitious','Cheerful','Shy','Creative','Curious','Determined','Eager','Energetic','Friendly', 'Helpful', 'Honest', 'Mature', 'Serious'];  
      const currency = ['Dollars', 'Cents', 'Rubles', 'Euros', 'Francs', 'Pounds', 'Dinars', 'Reals', 'Marks', 'Bitcoins', 'Yens', 'Krones', 'Shekels', 'Yuan', 'Bahts'];
      let nick;

      function getRandInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      return nick = getRandInt(2, 99) + character[getRandInt(0, (character.length - 1))] + currency[getRandInt(0, (currency.length - 1))];
    }

    addIdea(idea: IdeaItem, isAnonymous: boolean) {
      const timestamp = this.getTimeStamp();
      const email = this.user.email;
      const firstLiker = [];
      const firstDisliker = [];
      let displayName;

      firstLiker.push(email);
      firstDisliker.push(email);

      if (isAnonymous) {
        displayName = this.generateNick();
      } else {
        displayName = this.userName;
      }

      this.ideas = this.getIdeas();
      this.ideas.push({
        title: idea.title,
        topic: idea.topic,
        description: idea.description,
        timeStamp: timestamp,
        userName: displayName,
        email: email,
        likes: 0,
        dislikes: 0,
        likers: firstLiker,
        dislikers: firstDisliker,
       });
    }
    getTimeStamp() {
      const now = new Date();
      const date = now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getDate();
      const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  
      return (date + ' ' + time);
    }
    getIdeas(): FirebaseListObservable<IdeaItem[]> {
      return this.db.list('ideas', {
        query: {
          limitToLast: 25,
          orderByKey: true
        }
      });
    }
    updateIdea(ideaItem: IdeaItem) {
      return this.db.object(`ideas/${ ideaItem.$key }`).update(ideaItem);
    }
    deleteIdea(ideaItem: IdeaItem) {
      return this.db.object(`ideas/${ ideaItem.$key }`).remove();
    }
}
