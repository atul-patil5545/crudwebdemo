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
  resoffice;
  newsoffice;
  newsstudent;
  resStudent;
  newsteacher;
  resTeacher;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStudent();
    this.getTeacher();
    this.getOffice();
    this.getGround();
  }
  getStudent(): void {
    const url = 'http://192.168.1.116/api/s_demo.php';
    this.http.get(url).subscribe(res => {
    this.resStudent = res;
    this.newsstudent = this.resStudent.data;
    console.log(this.newsstudent);
    });
  }

  getTeacher(): void {
    const url = 'http://192.168.1.116/api/t_demo.php';
    this.http.get(url).subscribe(res => {
    this.resTeacher = res;
    this.newsteacher = this.resTeacher.data;
    console.log(this.newsteacher);
    });
  }

  getOffice(): void {
    const url = 'http://192.168.1.116/api/o_demo.php';
    this.http.get(url).subscribe(res => {
    this.resoffice = res;
    this.newsoffice = this.resoffice.data;
    console.log(this.newsoffice);
    });
  }

  getGround(): void {
    const url = 'http://192.168.1.116/api/g_demo.php';
    this.http.get(url).subscribe(res => {
    this.resData = res;
    this.newsdata = this.resData.data;
    console.log(this.newsdata);
    });
  }

}
