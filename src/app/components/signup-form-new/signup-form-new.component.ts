import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-form-new',
  templateUrl: './signup-form-new.component.html',
  styleUrls: ['./signup-form-new.component.css']
})
export class SignupFormNewComponent {

  email: string;
  password: string;
  displayName: string;
  errorMsg: string;
  realName: string;
  realSurname: string;

  constructor(private authService: AuthService, private router: Router) { }

  signUp() {
    const email = this.email;
    const password = this.password;
    const realName = this.realName;
    const realSurname = this.realSurname;
    const displayName = this.displayName;
    this.authService.signUp(email, password, realName, realSurname, displayName)
      .then(resolve => this.router.navigate(['bank-of-ideas']))
      .catch(error => this.errorMsg = error.message);
  }
}
