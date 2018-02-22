import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messages = [];

  constructor(public chatService:ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.getMessages();
  }
}
