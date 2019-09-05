import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { BooksService } from './books.service';
import { HeadComponent } from './head/head.component';
import { AboutAudibleComponent } from './about-audible/about-audible.component';
import { HowToStartComponent } from './how-to-start/how-to-start.component';
import { MembershipDetailsComponent } from './membership-details/membership-details.component';
import { DownloadTheAppComponent } from './download-the-app/download-the-app.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayBooksComponent,
    HeadComponent,
    AboutAudibleComponent,
    HowToStartComponent,
    MembershipDetailsComponent,
    DownloadTheAppComponent,
    FootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
