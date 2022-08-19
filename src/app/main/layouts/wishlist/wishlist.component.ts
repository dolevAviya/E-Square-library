import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from "../../books.service";
import {Book} from "../../books";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {
  volumes: Book[] = [];
  bookSubscription: Subscription = new Subscription;

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.get_volumes()
  }

  get_volumes() {
    this.bookSubscription = this.booksService.get_wishlist().subscribe(res =>
      this.volumes = res)
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
