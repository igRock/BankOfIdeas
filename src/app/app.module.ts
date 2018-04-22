import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { IdeaItemComponent } from './components/idea-item/idea-item.component';
import { IdeasFeedComponent } from './components/ideas-feed/ideas-feed.component';
import { LoginFormNewComponent } from './components/login-form-new/login-form-new.component';
import { SignupFormNewComponent } from './components/signup-form-new/signup-form-new.component';
import { IdeaFormComponent } from './components/idea-form/idea-form.component';

import { IdeaService } from './services/idea.service';
import { AuthService } from './services/auth.service';
import { LikeService } from './services/like.service';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormNewComponent,
    NavbarComponent,
    IdeaItemComponent,
    IdeasFeedComponent,
    LoginFormNewComponent,
    IdeaFormComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthService, IdeaService, LikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
