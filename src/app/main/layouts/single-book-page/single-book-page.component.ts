import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../../books";

@Component({
  selector: 'app-single-book-page',
  templateUrl: './single-book-page.component.html',
  styleUrls: ['./single-book-page.component.scss']
})
export class SingleBookPageComponent implements OnInit {

  book: Book | undefined;

  ngOnInit() {
    this.book = history.state;
  }

}
