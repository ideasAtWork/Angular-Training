import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/chat.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  constructor(private chatService:ChatService) { }

  sendMessage = (text:any) => {
    this.chatService.sendMessage(text.value);
    text.value = "";
  };

  ngOnInit() {}

}
