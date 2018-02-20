import { Component, OnInit } from "@angular/core";
import { MessageListComponent } from "./components/message-list/message-list.component";
import { NewMessageComponent } from "./components/new-message/new-message.component";
import { ChatService } from './shared/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = [];

  constructor(public chatService:ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.getMessages();
  }

}
