import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from 'app/models/person.model';
import { lastValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }
  private persons: Person[] = [];

  fetchPersons(): Observable<Person[]> {
    return this.http
      .get<Person[]>('https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/persons.json')
      .pipe(map(responseData => {
        const evenArray: Person[] = [];
        for(const key in responseData) {
          evenArray.push({ ...responseData[key], hkey: key});
        }
        this.persons = evenArray;
        return this.persons;
      }));
  }  

  async getPersons(): Promise<Person[]>{
    if ( this.persons.length == 0 ) {
      await lastValueFrom(this.fetchPersons());
    } 
    return this.persons;
  }  

  addNew() : Person {
    const newPerson = new Person("", 0, "", "", "", "", 0, "", 0, "", 0);
//    this.persons.push(newComponent);

    return newPerson;
  }

  deleteRow(index: number) {
    this.persons.splice(index, 1);
  }

  getPersonById(persons: Person[], id: number) {
    return persons.find(person => person.id == id);
  }  

  updatePersons(): any {
    console.log('-', this.persons, '-');
    this.persons.forEach((eachOne) => {
      if ( eachOne.hkey === "") {
        this.http.post('https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/persons.json', eachOne).subscribe();
      }
    });

    this.fetchPersons().subscribe();
  }

}
