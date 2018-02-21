import { Component, OnInit } from '@angular/core';
import { DecodeLoggerService } from '../decode-logger.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor(private loggerService: DecodeLoggerService) {
  }

  ngOnInit() {
  }

  executeInParent() {
    this.loggerService.debug('calling from executeInParent');
  }

}
