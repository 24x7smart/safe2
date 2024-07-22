import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetchUsers() : Observable<User[]> {
    return this.http
      .get<User[]>('https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
      .pipe(map(responseData => {
        const evenArray: User[] = [];
        for(const key in responseData) {
          evenArray.push({ ...responseData[key], hkey: key});
        }
        return evenArray;
      }));      
  }

  getUsers(): Observable<User[]>{
      return this.fetchUsers();
  }

  getUser(id: number): Observable<User> {
    return this.fetchUsers().pipe(
      map(items => items.find(item => item.id === id))
    )
  }
}
