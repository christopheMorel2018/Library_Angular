import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Subject } from 'rxjs';
import * as firebase from 'firebase'

@Injectable()
export class BookService {

  books: Book[]=[];
  bookSubject = new Subject<Book[]>();

  constructor() {
    this.getBooks();
   }

  emitBooks(){
    this.bookSubject.next(this.books);
  }

  saveBooks(){
    console.log("Je save" + this.books.length);
    firebase.database().ref('/books').set(this.books);
  }

  getBooks(){
    firebase.database().ref('/books')
    .on('value',(data) => {
      this.books = data.val ? data.val() : [];
      this.emitBooks();
    });
  }

  getBookById(id: number){
    return new Promise(
      (resolve,reject) => {
        firebase.database().ref('/books/'+id)
        .once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        )
      }
    );
  }

  createNewBook(newBook: Book){
    if (!this.books){
      this.books=[]
    };
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();

  }

  deleteBook(book: Book){
    const indexToRemove = this.books.findIndex(
      (b) => {
        if (b === book){
          return true;
        }
      }
    );
    if (confirm('Etes-vous sûr de vouloir supprimer ce livre ?')){
    this.books.splice(indexToRemove,1);
    this.saveBooks();
    this.emitBooks();
    } else {
      this.getBooks();
    }
    

  }
}
