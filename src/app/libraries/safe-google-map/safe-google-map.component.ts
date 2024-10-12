import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-safe-google-map',
  templateUrl: './safe-google-map.component.html',
  styleUrls: ['./safe-google-map.component.css']
})
export class SafeGoogleMapComponent implements AfterViewInit  {

  @Input() markers: { name: string, lat: number, lng: number }[] = [];
  @Input() mapConfig: { center: { lat: number, lng: number }, zoom: number } = {
    center: { lat: 0, lng: 0 },
    zoom: 1
  };

  private map!: google.maps.Map; // Declare the Google Map instance
  private currentMarkers: google.maps.Marker[] = []; // To keep track of current markers

  constructor() { }

  ngAfterViewInit() {
    this.loadMap();
  }

  // Initialize the Google Map
  loadMap() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      this.map = new google.maps.Map(mapElement, {
        center: this.mapConfig.center,
        zoom: this.mapConfig.zoom
      });

      this.addMarkersToMap();
    }
  }

  // Add markers to the map
  addMarkersToMap() {
    this.clearMarkers(); // Clear existing markers

    this.markers.forEach(markerData => {
      const marker = new google.maps.Marker({
        position: { lat: markerData.lat, lng: markerData.lng },
        map: this.map,
        title: markerData.name
      });

      // Store marker in currentMarkers array
      this.currentMarkers.push(marker);
    });

    this.setBounds(); // Set the bounds after adding markers
  }

  // Method to set new list data from the parent component
  setListData(newMarkers: { name: string, lat: number, lng: number }[]) {
    this.markers = newMarkers; // Update the markers
    this.addMarkersToMap(); // Re-add markers to the map
  }

  // Clear existing markers from the map
  private clearMarkers() {
    this.currentMarkers.forEach(marker => {
      marker.setMap(null); // Remove marker from the map
    });
    this.currentMarkers = []; // Clear the current markers array
  }

  // Set the map bounds to fit all markers
  private setBounds() {
    const bounds = new google.maps.LatLngBounds();

    this.currentMarkers.forEach(marker => {
      bounds.extend(marker.getPosition()!); // Extend bounds to include each marker's position
    });

    this.map.fitBounds(bounds); // Adjust the map's viewport to the bounds
  }  
}
