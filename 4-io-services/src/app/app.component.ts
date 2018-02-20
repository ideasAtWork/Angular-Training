import { Component } from '@angular/core';
import { Logger } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ Logger ]
})
export class AppComponent {
  title = 'app';

  constructor(private logger: Logger) {
    logger.debug('hi!');
  }
}
