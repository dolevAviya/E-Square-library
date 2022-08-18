import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../books.service";
import {Book} from "../../books";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  volumes: Book[] = [];

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.get_volumes()
  }

  get_volumes() {
    this.booksService.get_wishlist().subscribe(res => {
      this.volumes = res
      console.log(res)

    })
  }
}
