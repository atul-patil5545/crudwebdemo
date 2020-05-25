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
  public postData;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.myReactiveForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      subject : new FormControl(null, Validators.required),
      message : new FormControl(null, Validators.required)
    });
     }

  ngOnInit(): void {
  }

  btnClick() {
    const msgService = new MessageService();
    msgService.mesageAlert();
    msgService.onSubmit();
    msgService.reset();
  }
  onSubmit() {
    console.log('on submit called');
    console.log(this.myReactiveForm);
    if (this.myReactiveForm.valid) {
      console.log('Form Submitted Successfully');
      alert('Form Submitted Successfully');
      this.myReactiveForm.reset();
    } else {
      console.log('Form Not Submitted');
      alert('Form Not Submitted');
    }
  }
  reset() {
    this.myReactiveForm.reset();
  }

  submitForm() {
    // tslint:disable-next-line: prefer-const
    console.log('submitForm called');
    const data: any = new FormData();
    const sendBody = JSON.stringify(this.myReactiveForm.value);
    data.append('name', this.myReactiveForm.controls.name.value);
    data.append('email', this.myReactiveForm.controls.email.value);
    data.append('subject', this.myReactiveForm.controls.subject.value);
    data.append('message', this.myReactiveForm.controls.message.value);
    console.log(this.myReactiveForm);
    this.http.post('http://192.168.1.116/api/insert.php', data)
    // tslint:disable-next-line: no-shadowed-variable
    .subscribe(data => {
      this.postData = data;
      // console.log(this.postData);
      console.log(JSON.stringify(this.postData));
  });
  }
}
