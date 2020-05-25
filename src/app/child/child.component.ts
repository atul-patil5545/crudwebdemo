import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="text-center m-4">
      <button class="btn text-white bg-success" (click)="sendMessage()">Send Message</button>
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message = 'Welcome in Rsl Solution!';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
