import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightHoverDirective } from './highlight-hover.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HighlightHoverDirective,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
