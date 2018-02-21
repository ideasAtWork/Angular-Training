import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

export type MessageTypes = "DECODE_EVENT"; // add multiple values in the future with "|" in-between.
export interface MessageData {
  name: string;
  active: boolean;
  radio: string;
};

@Injectable()
export class MessagingService {
  private subject = new Subject<any>();

  sendMessage(type: MessageTypes, data: MessageData) {
    this.subject.next({ type, data });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}