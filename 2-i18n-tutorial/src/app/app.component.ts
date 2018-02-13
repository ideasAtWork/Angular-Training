import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
    translate.setDefaultLang("en");
  }

  switchLanguage = (lang: string) => {  // <-- creating a new method
    this.translate.use(lang); // <-- invoking `use()`
  }
}
