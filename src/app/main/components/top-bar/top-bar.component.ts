import { Component, OnInit } from '@angular/core';
import {GlobalComponent} from "../../../global.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  username:string = '';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.username = GlobalComponent.username
  }

  logout() {
    GlobalComponent.username ='';
    this.router.navigate(["/sign-in"])
  }
}
