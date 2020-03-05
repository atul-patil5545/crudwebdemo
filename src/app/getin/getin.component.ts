import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MessageService } from '../appservices/message.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-getin',
  templateUrl: './getin.component.html',
  styleUrls: ['./getin.component.css']
})
export class GetinComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor(public fb: FormBuilder,private http: HttpClient) {
    this.myReactiveForm = this.fb.group({
      name: [''],
      email: [''],
      subject: [''],
      message: ['']

    }); }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      subject : new FormControl(null, Validators.required),
      message : new FormControl(null, Validators.required)
    });
  }

  btnClick() {
    const msgService = new MessageService();
    msgService.mesageAlert();
  }
  onSubmit() {
    console.log(this.myReactiveForm);
  }
  submitForm() {
    // tslint:disable-next-line: prefer-const
    let formData: any = new FormData();
    formData.append('name', this.myReactiveForm.get('name').value);
    formData.append('email', this.myReactiveForm.get('email').value);
    formData.append('subject', this.myReactiveForm.get('subject').value);
    formData.append('message', this.myReactiveForm.get('message').value);

    this.http.post('http://192.168.1.114/api/api.php', formData.data).subscribe(
      // this.contactdata = this.contactData.data;
      // console.log(this.newsdata);
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
