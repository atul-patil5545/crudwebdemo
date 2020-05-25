import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-apipost',
  templateUrl: './apipost.component.html',
  styleUrls: ['./apipost.component.css']
})
export class ApipostComponent implements OnInit {
  datasaved = false;
  bookidToUpdate = null;
  bookForm: FormGroup;
  allbooks: Observable<Book[]>;
  softBooks: Book[];
  constructor(private formbuilder: FormBuilder, public router: Router, private bookservice: BookService) {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.bookForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      writer: ['', [Validators.required]]
    });
    this.getsoftBooks();
  }
  onFormSubmit() {
    this.datasaved = false;
    const book = this.bookForm.value;
    this.createbooks(book);
    this.bookForm.reset();
  }
  reset() {
    this.bookForm.reset();
  }

  createbooks(book: Book) {
    if (this.bookidToUpdate == null) {
    this.bookservice.createbook(book).subscribe(
      // tslint:disable-next-line: no-shadowed-variable
      book => {
          this.datasaved = true;
          this.getsoftBooks();
          this.bookidToUpdate = null;
      }
    );
  } else {
    book.id = this.bookidToUpdate;
    this.bookservice.updatebook(book)
    // tslint:disable-next-line: no-shadowed-variable
    .subscribe(book => {
      this.datasaved = true;
      this.getsoftBooks();
      this.bookidToUpdate = null;
  }
  );
}
}

  getsoftBooks() {
    this.allbooks = this.bookservice.getBooksFromStore();
    // this.bookservice.getBooksFromStore().subscribe(books => this.softBooks = books);
  }

  booktoedit(bookid: string) {
    this.bookservice.getbookbyid(bookid).subscribe(book => {
      this.bookidToUpdate = bookid;
      this.bookForm.controls.name.setValue(book.name);
      this.bookForm.controls.category.setValue(book.category);
      this.bookForm.controls.writer.setValue(book.writer);

    });
  }

  bookdelete(bookid: string) {
    this.bookservice.deletebook(bookid)
    .subscribe(book => {
      this.getsoftBooks();
    });
  }

}

