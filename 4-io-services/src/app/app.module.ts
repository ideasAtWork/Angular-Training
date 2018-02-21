import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DecodeLoggerService } from './decode-logger.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: DecodeLoggerService,
    useFactory: () => new DecodeLoggerService()
  }, {
    provide: 'apiUrl',
    useValue: 'http://my-backend.com/'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
