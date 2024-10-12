import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Building, Contact, Block, Floor } from '../../models/building.model';  // Import models

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  private apiUrl = 'http://localhost:5000/api/buildings';  // Your backend API URL

  constructor(private http: HttpClient) {}

  // Set headers for authentication (JWT token)
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');  // Assuming token is stored in localStorage
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  // Get all buildings
  getAllBuildings(): Observable<Building[]> {
    return this.http
      .get<Building[]>(this.apiUrl, { headers: this.getHeaders() })
      .pipe(map((response: Building[]) => response));
  }

  // Get building by ID
  getBuildingById(id: number): Observable<Building> {
    return this.http
      .get<Building>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(map((response: Building) => response));
  }

  // Create a new building
  createBuilding(building: Building): Observable<Building> {
    return this.http
      .post<Building>(this.apiUrl, building, { headers: this.getHeaders() })
      .pipe(map((response: Building) => response));
  }

  // Update an existing building
  updateBuilding(id: number, building: Building): Observable<Building> {
    return this.http
      .put<Building>(`${this.apiUrl}/${id}`, building, { headers: this.getHeaders() })
      .pipe(map((response: Building) => response));
  }

  // Delete a building
  deleteBuilding(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(map(() => null));
  }

  // Add a contact to a building
  addContact(buildingId: number, contact: Contact): Observable<Contact> {
    return this.http
      .post<Contact>(`${this.apiUrl}/${buildingId}/contacts`, contact, { headers: this.getHeaders() })
      .pipe(map((response: Contact) => response));
  }

  // Add a block to a building
  addBlock(buildingId: number, block: Block): Observable<Block> {
    return this.http
      .post<Block>(`${this.apiUrl}/${buildingId}/blocks`, block, { headers: this.getHeaders() })
      .pipe(map((response: Block) => response));
  }

  // Add a floor to a block
  addFloor(blockId: number, floor: Floor): Observable<Floor> {
    return this.http
      .post<Floor>(`${this.apiUrl}/blocks/${blockId}/floors`, floor, { headers: this.getHeaders() })
      .pipe(map((response: Floor) => response));
  }

  // Method to search buildings based on criteria
  searchBuildings(criteria: any): Observable<Building[]> {
    return this.http.post<Building[]>(`${this.apiUrl}/search`, criteria);
  }  
}
