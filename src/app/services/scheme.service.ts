import { HttpClient } from '@angular/common/http';
import {SectorType, ScaleItem} from '../models/sector-type.model';
import { Injectable } from '@angular/core';
import { Observable, from, switchMap, of, tap, lastValueFrom, map } from 'rxjs';
import {Zone, Sector, Scheme} from '../models/sectors.model';

@Injectable({providedIn: 'root'})
export class SchemeService {

    constructor(private http: HttpClient) {}
    private baseUrl = 'https://safe-bdbt2-default-rtdb.asia-southeast1.firebasedatabase.app/scheme';
    
    getAll(): Observable<Scheme[]> {
      return this.http.get<{ [key: string]: Scheme }>(`${this.baseUrl}.json`)
        .pipe(
          map(responseData => {
            const schemesArray: Scheme[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                schemesArray.push({ ...responseData[key], hkey: key });
              }
            }
            return schemesArray;
          })
        );
    };

    getScheme(eid: number): Observable<Scheme | undefined> {
      return this.getAll().pipe(
        map(schemes => schemes.find(scheme => scheme.event_id === eid))
      );
    }

    create(scheme: Scheme): Observable<{ name: string }> {
      return this.http.post<{ name: string }>(`${this.baseUrl}.json`, scheme);
    }

    update(id: string, scheme: Scheme): Observable<void> {
      return this.http.put<void>(`${this.baseUrl}/${id}.json`, scheme);
    }

    addZone(scheme: Scheme) : Zone {
        const newZone = { zid: 0, zcode: '', zname: '', sectors:[], deleted: 0, show: false};
        scheme.zones.push(newZone);

        return newZone;
    }

    deleteZone(scheme: Scheme, index: number) {
        scheme.zones.splice(index, 1);
    }

    addSector(zone: Zone) : Sector {
        const newSector = { id: 0, name: '', code: '', ranks: [{r: '1', c:0, s: 1, a: 0}, {r: '2', c: 0, s: 2, a: 0}, {r:'3', c:0, s: 3, a: 0}, {r: '4', c:0, s: 4, a: 0}, {r: '5', c:0, s: 5, a: 0}, {r: '6', c: 0, s: 6, a: 0}, {r: '7', c: 0, s: 7, a: 0}, {r: '8', c:0, s: 8, a: 0}], deleted: 0, type: 0,
            onmap: {type: '', points: [], radius: 0} };

        if (!('sectors' in zone)) {
          zone.sectors = [];
        }
        let maxValue = zone.sectors.reduce((acc, value) => {
              return (acc = acc > value.id ? acc : value.id);
          }, 0);
        newSector.id = maxValue + 1;
        return newSector;
    }

    updateSector(sector: Sector) {
      return sector;
    }

    deleteSector(scheme: Scheme, zone: Zone, index: number) {
      zone.sectors.splice(index, 1);
    }

    deleteSectorById(scheme: Scheme, id: number) {
      var removed: boolean = false;
      scheme.zones.forEach((zone: Zone) => {
        for(var i=0; i < zone.sectors.length; i++) {
          if (zone.sectors[i].id === id) {
            zone.sectors.splice(i, 1);
            console.log(scheme);
            return;
          }
        }
      });
    }

    getZoneById(scheme: Scheme, id: number) : Zone {
      console.log(scheme.zones);
      console.log(id);
      return scheme.zones.find(zone => zone.zid == id);
    }

    getSectorById(scheme: Scheme, id: number) : Sector {
      const foundSector = scheme.zones
        .flatMap(zone => zone.sectors) // Flatten the nested arrays of sectors
        .find(sector => sector.id === id); 
      return foundSector || null;
    }
}