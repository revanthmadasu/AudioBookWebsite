import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-indian-best-sellers',
  templateUrl: './indian-best-sellers.component.html',
  styleUrls: ['./indian-best-sellers.component.css']
})
export class IndianBestSellersComponent implements OnInit {

  public indianBooks:Book[]
  constructor(public service:BooksService) { }

  ngOnInit() {
    this.indianBooks=this.service.getIndianBooks()
  }

}
