import { FormGroup } from '@angular/forms';

export class MessageService {
  myReactiveForm: FormGroup;
    mesageAlert() {
      // if (this.form.valid) {
      //   alert('form submitted');
      // } else {
      //   alert('form not submitted');
      // }
    }
    onSubmit() {
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
}
