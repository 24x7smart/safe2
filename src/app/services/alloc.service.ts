import { HttpClient } from '@angular/common/http';
import {SectorType, ScaleItem} from '../models/sector-type.model';
import { Injectable } from '@angular/core';
import { Observable, from, switchMap, of } from 'rxjs';
import {Zone, Sector} from '../models/sectors.model';

@Injectable({providedIn: 'root'})
export class SchemeService {

    constructor(private http: HttpClient) {}

}