import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { IndianBestSellersComponent } from './indian-best-sellers/indian-best-sellers.component';
import { InternationalBestSellersComponent } from './international-best-sellers/international-best-sellers.component';
import { GreatFirstListenersComponent } from './great-first-listeners/great-first-listeners.component';
import { BooksService } from './books.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayBooksComponent,
    IndianBestSellersComponent,
    InternationalBestSellersComponent,
    GreatFirstListenersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [DisplayBooksComponent]
})
export class AppModule { }
