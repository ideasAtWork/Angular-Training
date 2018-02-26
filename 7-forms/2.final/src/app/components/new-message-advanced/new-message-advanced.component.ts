import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/chat.service';

@Component({
  selector: 'app-new-message-advanced',
  templateUrl: './new-message-advanced.component.html',
  styleUrls: ['./new-message-advanced.component.css']
})
export class NewMessageAdvancedComponent implements OnInit {
  default: string;

  constructor(private chatService:ChatService) {
    this.default = 'Write your message here...';
  }

  ngOnInit() {
  }

  sendMessage = (text:any) => {
    this.chatService.sendMessage(text.value);
    text.value = "";
  };
}
