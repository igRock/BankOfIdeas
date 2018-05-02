import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase/app';

const authState = {
  isAnonymous: true,
  uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
} as firebase.User;
let authServiceTest : AuthService;

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AngularFireModule.initializeApp(environment.firebase)],
      providers: [AuthService, AngularFireAuth]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('2. currentUserId should be of type String', inject([ AuthService ], (service: AuthService) => {
    Reflect.set(service, 'authState', authState);

    expect(service.currentUserId).toBe(authState.uid);
  }));

  it('3. currentUserId should be undefined', inject([ AuthService ], (service: AuthService) => {
    expect(service.currentUserId).toBe(undefined);
  }));

});
