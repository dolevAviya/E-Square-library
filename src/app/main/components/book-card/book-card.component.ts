import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../books";
import {BooksService} from "../../books.service";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() volume: Book | undefined;
  @Input() isVolumeClicked: boolean = false;
  @Input() bigCard: boolean = false;
  newDate: Date | undefined;

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    if (this.volume?.volumeInfo.publishedDate?.includes('-')) {
      this.newDate = new Date(this.volume?.volumeInfo.publishedDate)
    }
  }

  addToWishlist() {
    if (this.volume) {
      this.booksService.addToWishlist(this.volume)
      this.isVolumeClicked = true;
    }
  }

  removeFromWishlist() {
    if (this.volume?.id) {
      this.booksService.removeFromWishlist(this.volume?.id)
      this.isVolumeClicked = false;
    }
  }

}
