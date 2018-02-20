import { Component, OnInit, Input } from '@angular/core';
import { Message } from "../../types";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Input() messages: Message[];

  constructor() {
    // constructor(public chatService:ChatService) { }
    // messages:Message[] = this.chatService.getMessages();
  }

  ngOnInit() {
  }

}
