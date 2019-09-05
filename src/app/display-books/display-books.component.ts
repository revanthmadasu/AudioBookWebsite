import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {

  public books:Book[]
  constructor(public _service:BooksService) { }

  ngOnInit() {
    this.books=this._service.getIndianBooks();
  }
  public indianBooks():void
  {
    this.books=this._service.getIndianBooks()
  }
  public internationalBooks():void
  {
    this.books=this._service.getInternationalBooks()
  }

}
