import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
bookUrl = '/api/books';
  constructor(private http: HttpClient) { }

  getbookbyid(bookid: string) {
    return this.http.get<Book>(this.bookUrl + '/' + bookid);
  }
  createbook(book: Book): Observable<Book> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/Json');
    // const postapi = {
    //   header: httpheaders
    // };
    return this.http.post<Book>(this.bookUrl, book);
  }
  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
  updatebook(book: Book): Observable<number> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/Json');
    // const postapi = {
    //   header: httpheaders
    // };
    return this.http.put<number>(this.bookUrl + '/' + book.id, book);
  }
  deletebook(bookid: string ): Observable<number> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/Json');
    // const postapi = {
    //   header: httpheaders
    // };
    return this.http.delete<number>(this.bookUrl + '/' + bookid);
  }
}
