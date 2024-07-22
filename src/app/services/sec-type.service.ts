import { HttpClient } from '@angular/common/http';
import {SectorType, ScaleItem} from '../models/sector-type.model';
import { Component, Injectable } from '@angular/core';
import { Observable, from, switchMap, of, lastValueFrom, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SecTypeService {

    constructor(private http: HttpClient) {}
    private components: SectorType[] = [];

    fetchComponents(): Observable<SectorType[]> {
      return this.http
        .get<SectorType[]>('https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/components.json')
        .pipe(map(responseData => {
          const evenArray: SectorType[] = [];
          for(const key in responseData) {
            evenArray.push({ ...responseData[key], hkey: key});
          }
          this.components = evenArray;
          return this.components;
        }));
    }

/*    
    getComponents(): SectorType[]{
      return this.components;
    }
*/
    async getComponents(): Promise<SectorType[]>{
      if ( this.components.length == 0 ) {
        await lastValueFrom(this.fetchComponents());
      } 
      return this.components;
    }

    addNew() : SectorType {
      const newComponent = { id: 0, name: '', code: '', ranks: [{r: '1', c:0, s: 1, a: 0}, {r: '2', c: 0, s: 2, a: 0}, {r:'3', c:0, s: 3, a: 0}, {r: '4', c:0, s: 4, a: 0}, {r: '5', c:0, s: 5, a: 0}, {r: '6', c: 0, s: 6, a: 0}, {r: '7', c: 0, s: 7, a: 0}, {r: '8', c:0, s: 8, a: 0}], deleted: 0, icon: '', map_type: 'P', hkey: ''};
      this.components.push(newComponent);

      return newComponent;
    }

    deleteRow(index: number) {
      this.components.splice(index, 1);
    }

    getComponentById(components: SectorType[], id: number) {
      return components.find(component => component.id == id);
    }

    updateComponents(): any {
      //return this.http.put('https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/components.json', this.components);
      this.components.forEach((eachOne) => {
        console.log(eachOne);
        console.log('-', eachOne.hkey, '-');
        if ( eachOne.hkey === "") {
          alert(eachOne.hkey);
          this.http.post('https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/components.json', eachOne);
        }
      });
    }     
}