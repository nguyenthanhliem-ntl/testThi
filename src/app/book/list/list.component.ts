import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../server/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }
}