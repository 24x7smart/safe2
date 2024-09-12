import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) {}
  private settings: any[] = [];

  fetchSettings(): Observable<any> {
    return this.http
      .get<any>('https://safe247-28ac1-default-rtdb.asia-southeast1.firebasedatabase.app/settings.json')
      .pipe(map(responseData => {
        const evenArray: any[] = [];
        for(const key in responseData) {
          evenArray.push({ ...responseData[key], hkey: key});
        }
        this.settings = evenArray;
        console.log(this.settings);
        return this.settings;
      }));
  }

  async getSettings(): Promise<any[]>{
    if ( this.settings.length == 0 ) {
      await lastValueFrom(this.fetchSettings());
    } 
    return this.settings;
  }

  async getSettingsByCode(code: string) {
    if ( this.settings.length == 0 ) {
      await lastValueFrom(this.fetchSettings());
    } 
    return this.settings.find(setting => setting.hkey == code);
  }
}
