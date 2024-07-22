import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bEvent } from 'app/models/bevent.model';
import { User } from 'app/models/user.model';
import { EventService } from 'app/services/event.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  statuses = [
    {id: 'P', name: 'Planning'},
    {id: 'L', name: 'Live'},
    {id: 'C', name: 'Completed'}
  ];

  types = [
    {id: 'G', name: 'General'},
    {id: 'P', name: 'Procession'},
    {id: 'E', name: 'Election'}
  ];

  events: bEvent[] = [];
  users: User[] = [];

  constructor(private router: Router,
      private eventService: EventService,
      private userService: UserService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      console.log(this.events);
    })

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  StatusDesc(sts: string) {
    return this.statuses.find(status => status.id === sts).name;
  }

  TypeDesc(typ: string) {
    return this.types.find(typ1 => typ1.id === typ).name;
  }

  UserName(usr: number) {
    return this.users.find(usr1 => usr1.id === usr).name;
  }

  ManageEvent(id: number) {
    this.router.navigateByUrl('/deploy/scheme');
  }

  SourceEvent(id: number) {
    this.router.navigateByUrl('/source/unit');
  }
}
