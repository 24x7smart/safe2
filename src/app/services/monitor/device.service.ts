import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private apiUrl = 'http://localhost:5000/api/devices';  // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Get all devices
  getAllDevices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Get device by ID
  getDeviceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new device
  createDevice(device: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, device, { headers });
  }

  // Update an existing device
  updateDevice(id: number, device: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/${id}`, device, { headers });
  }

  // Delete a device
  deleteDevice(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Method to fetch buildings without devices
  getNoDeviceBuildings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/buildings/no-devices`);
  }  

  // Method to search devices by status
  searchDevices(status: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, { params: { status } });
  }  
}
