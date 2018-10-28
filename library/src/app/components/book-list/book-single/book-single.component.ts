import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.scss']
})
export class BookSingleComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = new Book();
    var id =this.route.snapshot.params['id'];
    this.bookService.getBookById(+id).then(
      (b: Book) => {
        this.book = b;
      }
    );
  }

  onBack(){
    this.router.navigate(['/books']);
  }

}
