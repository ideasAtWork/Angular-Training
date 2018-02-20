import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { ChatService } from './shared/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
