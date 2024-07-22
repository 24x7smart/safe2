import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bEvent } from 'app/models/bevent.model';
import { Observable, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }


  fetchEvents() : Observable<bEvent[]> {
    return this.http
      .get<bEvent[]>('https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/events.json')
      .pipe(map(responseData => {
        const evenArray: bEvent[] = [];
        for(const key in responseData) {
          evenArray.push({ ...responseData[key], hkey: key});
        }
        return evenArray;
      }));      
  }

  getEvents(): Observable<bEvent[]>{
      return this.fetchEvents();
  }

  getEvent(id: number): Observable<bEvent> {
    return this.fetchEvents().pipe(
      map(items => items.find(item => item.id === id))
    )
  }

  updateEvent(event: bEvent): Observable<any> {
    return this.http.put('https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/events/' + event.hkey + '.json', event);
  } 
}
