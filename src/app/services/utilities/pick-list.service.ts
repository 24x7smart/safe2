import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class PickListService {
  private picklists: any = null; // Will hold the picklist data
  private picklistsSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  private apiUrl = 'http://localhost:5000/api/picklists';  // Adjust the URL as per your backend API
  
  constructor(private http: HttpClient) {
    this.loadPicklists();
  }

  private async loadPicklists() {
    // Simulate loading picklists from an API or JSON file
    this.http.get(`${this.apiUrl}`).subscribe((data: any) => {
      this.picklists = data;
      this.picklistsSubject.next(this.picklists); // Update the observable with the loaded picklist data
    });
  }  

  // Get label by Picklist Type and Code
  getPicklistValue(type: string, code: string): Observable<string> {
    return new Observable<string>((observer) => {
      this.picklistsSubject.subscribe(picklists => {
        if (picklists) {
          const picklist = picklists[type];
          if (picklist) {
            const item = picklist.find((item: any) => item.code === code);
            if (item) {
              observer.next(item.label);
            } else {
              console.warn(`Picklist code "${code}" not found in type "${type}"`);
              observer.next(null); // No matching code
            }
          } else {
            console.warn(`Picklist type "${type}" not found`);
            observer.next(null); // No matching type
          }
        }
      });
    });
  }

  getLookupValue(data: any[], matchField: string, matchValue: any, valueField: string): any {
    // Check if data exists and is an array
    if (!Array.isArray(data)) {
      return null;
    }

    // Find the object in the array where matchField equals matchValue
    const matchedItem = data.find(item => item[matchField] === matchValue);

    // If a matching object is found, return the value of valueField
    if (matchedItem) {
      return matchedItem[valueField];
    }

    // If no match is found, return null or a default value
    return null;      
  }

}
