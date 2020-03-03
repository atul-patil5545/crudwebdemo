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
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const url ="http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-03&sortBy=publishedAt&apiKey=5d797ad949144b93b9abeea2c208f7f5";
    this.http.get(url).subscribe(res=>{
    this.resData=res;
    this.newsdata=this.resData.articles;  
      
      console.log(this.newsdata);
      
    })
  }


}
