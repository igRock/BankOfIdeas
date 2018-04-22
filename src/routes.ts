import { Routes } from '@angular/router';
import { SignupFormNewComponent } from './app/components/signup-form-new/signup-form-new.component';
import { LoginFormNewComponent } from './app/components/login-form-new/login-form-new.component';
import { MainContentComponent } from './app/components/main-content/main-content.component';


export const appRoutes: Routes = [
    { path: 'signup', component: SignupFormNewComponent },
    { path: 'login', component: LoginFormNewComponent },
    { path: 'bank-of-ideas', component: MainContentComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
];
