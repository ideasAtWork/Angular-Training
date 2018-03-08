import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/chat.service';
import { ChatMessage } from '../../chat-message';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-message-advanced',
  templateUrl: './new-message-advanced.component.html',
  styleUrls: ['./new-message-advanced.component.css']
})
export class NewMessageAdvancedComponent implements OnInit {
  default: string;
  ourMessage: string = "default message";
  model = new ChatMessage(1, "primul mesaj", true);
  submitted = false;

  constructor(private chatService:ChatService) {
    this.default = 'Write your message here...';
  }

  ngOnInit() {
  }

  sendMessage = (text: HTMLInputElement) => {
    this.chatService.sendMessage(text.value);
    text.value = "";
  };

  submitForm(chatForm: NgForm) {
    this.submitted = true;

    this.chatService.sendMessage(chatForm.form.value.contents);
  }
}
