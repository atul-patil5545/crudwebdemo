import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-getin',
  templateUrl: './getin.component.html',
  styleUrls: ['./getin.component.css']
})
export class GetinComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      subject : new FormControl(null, Validators.required),
      message : new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm);
  }
}
