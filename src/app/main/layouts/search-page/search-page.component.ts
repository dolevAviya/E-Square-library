import {Component, OnDestroy} from '@angular/core';
import {Book} from "../../books";
import {BooksService} from "../../books.service";
import {Subscription} from "rxjs";

const MAX_RESULTS_IN_PAGE = 20;

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnDestroy{

  volumes: Book[] = [];
  searchValue: string = '';
  isLoading: boolean = false;
  currentPage: number = 1;
  bookSubscription: Subscription = new Subscription;

  constructor(private booksService: BooksService) {
  }

  get_volumes() {
    this.isLoading = true;
    let index = (this.currentPage - 1) * MAX_RESULTS_IN_PAGE
    this.bookSubscription = this.booksService.get_books(this.searchValue, index, MAX_RESULTS_IN_PAGE).subscribe(res => {
      this.volumes = res
      this.isLoading = false
      console.log(res)
    })
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

  handleSearch() {
    if (this.searchValue !== '') {
      this.get_volumes()
    } else {
      this.volumes = [];
    }
  }

  handlePagination(value: 'back' | 'foreword') {
    if (value === 'back') {
      this.currentPage -= 1;
    } else {
      this.currentPage += 1;
    }
    this.get_volumes();
  }
}
