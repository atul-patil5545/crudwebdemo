
import { Component, Input } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-parent',
  template: `
    <h4 class="text-center">Message : {{message}} </h4>
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }
  // tslint:disable-next-line: no-input-rename
  @Input('appHighlight') highlightColor: string;
  private el: HTMLElement;
  message: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'cyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  // @HostListener('click') onhostClick(){
  //   alert('hello');
  // }
  private highlight(color: string) {
    this.el.style.backgroundColor = color;
  }
  // messge dependency call
  receiveMessage($event: string) {
    this.message = $event;
  }
}
