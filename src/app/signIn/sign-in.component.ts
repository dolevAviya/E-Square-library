import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {GlobalComponent} from "../global.component";

@Component({
  selector: 'app-auth',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent{


  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  singInForm = this.formBuilder.group({
    username: '',
  })

  handleSignIn() {
    GlobalComponent.username = this.singInForm.value.username;
    this.router.navigate(["/main"])
  }
}
