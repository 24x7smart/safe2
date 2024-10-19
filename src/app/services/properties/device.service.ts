import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../../models/device.model';  // Assuming you have a device model
import { Building } from '../../models/building.model';  // Assuming you have a building model

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://localhost:5000/api/devices';  // Adjust the URL as per your backend API

  constructor(private http: HttpClient) { }

  // Get all devices
  getAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.apiUrl}`);
  }

  // Get a device by ID
  getDeviceById(deviceId: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/${deviceId}`);
  }

  // Create a new device
  createDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(this.apiUrl, device, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Update an existing device
  updateDevice(deviceId: number, device: Device): Observable<Device> {
    return this.http.put<Device>(`${this.apiUrl}/${deviceId}`, device, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Delete a device
  deleteDevice(deviceId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${deviceId}`);
  }

  // Get buildings that have no associated devices
  getNoDeviceBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>(`${this.apiUrl}/buildings/no-devices`);
  }

  // Search devices by status
  searchDevices(status: string): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.apiUrl}/search`, {
      params: { status }
    });
  }
}
