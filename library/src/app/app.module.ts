import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookSingleComponent } from './components/book-list/book-single/book-single.component';
import { BookFormComponent } from './components/book-list/book-form/book-form.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';



const routes: Routes = [
  { path: 'auth/signup', component: SignUpComponent },
  { path: 'auth/signin', component: SignInComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/edit', component: BookFormComponent },
  { path: 'books/:id', component: BookSingleComponent },
  { path: '', component: SignInComponent  },
  
];


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookSingleComponent,
    BookFormComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
