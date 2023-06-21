import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  constructor() {}
  
  conversation = new Subject<Message[]>();
  
  messageMap : { [key: string]: string }  = {
    "Hi": "Hello! Welcome to TSP Chat Master. If you need help, please type 'Yes.' We'll let you know what steps you should follow.",
    "No": "Thank you for chatting with us! We are here to help you. Feel free to say 'Hi' if you need to chat with us again.",
    "who are you": "I am the Chat Master of TSP Team",
    "Yes": "Thank you for chatting with TSP team! We will provide you with some guidance on the steps you should follow. Say 'Ok' if you need to  move forward.",
    "Ok":"",
    "default": "I can't understand. Can you please repeat"
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);  
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}
