import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { BooksService } from './books.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
