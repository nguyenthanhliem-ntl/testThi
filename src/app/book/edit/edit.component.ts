import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../server/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
bookForm: FormGroup;
id: number;
  constructor(private bookService: BookService,
              private activateddRouter: ActivatedRoute) {
    this.activateddRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit() {
  }

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title)
      });
    });
  }

  updateBook(id: number) {
    const book  = this.bookForm.value;
    this.bookService.updateBook(id, book).subscribe(() => {
      alert('ok  nhá!');
    }, e => {
      console.log(e);
    });

    }
}
