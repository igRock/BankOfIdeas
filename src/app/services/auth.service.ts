import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {
      this.user = afAuth.authState;
    }

    authUser() {
      return this.user;
    }

    get currentUserId(): string {
      return this.authState !== null ? this.authState.uid : '';
    }

    login(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user;
          this.router.navigate(['bank-of-ideas']);
        });
    }

    logout() {
      this.afAuth.auth.signOut();
      this.router.navigate(['login']);
    }

    signUp(email: string, password: string, realName: string, realSurname: string)  {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
              .then((user) => {
                this.authState = user;
                this.setUserData(email, realName, realSurname);
              }).catch(error => console.log(error));
    }

    setUserData(email: string, realName: string, realSurname: string): void {
      const path = `users/${this.currentUserId}`;
      const data = {
        email: email,
        realName: realName,
        realSurname: realSurname,
      };

      this.db.object(path).update(data)
        .catch(error => console.log(error));
    }
}
