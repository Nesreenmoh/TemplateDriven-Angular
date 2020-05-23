import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tempalate-form';
  @ViewChild('f') submittedForm: NgForm;
  default_level: string = 'Advanced';
  userData = {
    userEmail: '',
    userPassword: '',
    userLevel: '',
  };
  validForm: boolean = false;

  levels: string[] = ['Basic', 'Advanced', 'Professional'];

  onSubmit() {
    this.validForm = true;
    this.userData.userEmail = this.submittedForm.value.email;
    this.userData.userPassword = this.submittedForm.value.password;
    this.userData.userLevel = this.submittedForm.value.level;
  }
}
