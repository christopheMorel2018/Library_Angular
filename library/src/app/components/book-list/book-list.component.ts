import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  booksSubscription: Subscription;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {

    this.booksSubscription = this.bookService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.getBooks();
    this.bookService.emitBooks();
  }

  ngOnDestroy(){
    this.booksSubscription.unsubscribe();
  }

  onNewBook(){
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book){
    this.bookService.deleteBook(book);
  }

  onViewBook(id: number){
    this.router.navigate(['/books', 'view', id]);

  }



}
