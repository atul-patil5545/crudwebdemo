import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  resData;
  newsdata;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = 'https://api.myjson.com/bins/12toki';
    this.http.get(url).subscribe(res => {
    this.resData = res;
    this.newsdata = this.resData.data;
    console.log(this.newsdata);
    });
  }


}
