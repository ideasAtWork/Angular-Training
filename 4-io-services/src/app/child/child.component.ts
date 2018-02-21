import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  @Input() parametrulDoi: string;
  @Output() triggeredFromChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.triggeredFromChild.emit();
  }
}
