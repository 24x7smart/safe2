import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-chat',
  templateUrl: './alert-chat.component.html',
  styleUrls: ['./alert-chat.component.css']
})
export class AlertChatComponent implements OnInit {
  messages: { sender: string, text: string, timestamp: Date }[] = [];
  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'You', // Set the sender name here
        text: this.newMessage,
        timestamp: new Date()
      });
      this.newMessage = ''; // Clear the input field
    }
  }  
}
