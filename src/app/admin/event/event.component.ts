import { Component, OnInit } from '@angular/core';
import { bEvent } from 'app/models/bevent.model';
import { User } from 'app/models/user.model';
import { EventService } from 'app/services/event.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: bEvent;
  user: User; 

  constructor(private eventService: EventService,
      private userService: UserService) { }

  ngOnInit(): void {
    this.eventService.getEvent(1).subscribe(event => {
      console.log(event);
      this.event = event;
      this.userService.getUser(this.event.org_user).subscribe(user => {
        console.log(user);
        this.user = user;
      });
    });
  }

  UpdateEvent() {
    this.eventService.updateEvent(this.event).subscribe();
  }
}
