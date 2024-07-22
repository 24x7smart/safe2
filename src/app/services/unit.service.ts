import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unit } from 'app/models/unit.model';
import { Observable, lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) {}
  private units: Unit[] = [];
  private baseUrl = 'https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/units';


  fetchUnits(): Observable<Unit[]> {
    return this.http
      .get<Unit[]>(`${this.baseUrl}.json`)
      .pipe(map(responseData => {
        const evenArray: Unit[] = [];
        for(const key in responseData) {
          evenArray.push({ ...responseData[key], hkey: key});
        }
        this.units = evenArray;
        return this.units;
      }));
  }

  async getUnits(): Promise<Unit[]>{
    if ( this.units.length == 0 ) {
      await lastValueFrom(this.fetchUnits());
    } 
    return this.units;
  }


  addNew() : Unit {
    var newUnit: Unit = new Unit("", 0, "", false, 0, false, []);
    this.units.push(newUnit);

    return newUnit;
  }

  deleteRow(index: number) {
    this.units.splice(index, 1);
  }

  getUnitById(units: Unit[], id: number) {
    return units.find(unit => unit.id == id);
  }

  updateUnits(): any {
    this.units.forEach((eachOne) => {
      console.log(eachOne);
      console.log('-', eachOne.hkey, '-');
      if ( eachOne.hkey === "") {
        alert(eachOne.hkey);
        const { hkey, ...rest } = eachOne;

        //this.http.post('https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/units.json', eachOne);
        return this.http.put<void>(`${this.baseUrl}/${eachOne.hkey}.json`, rest);
      }
    });
  }       
}
