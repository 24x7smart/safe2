import { Component, Input, AfterViewInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

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
  @Input() infoTemplate!: TemplateRef<any>; // Template to display in the infoWindow

  private map!: google.maps.Map; // Declare the Google Map instance
  private currentMarkers: google.maps.Marker[] = []; // To keep track of current markers
  private infoWindow!: google.maps.InfoWindow; // Declare the InfoWindow

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.loadMap();
  }

  // Initialize the Google Map
  loadMap() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      var mapOptions = {
        zoom: this.mapConfig.zoom,
        center: this.mapConfig.center,
        scrollwheel: true, // disable de scroll over the map if required, it is a really annoing when you scroll through page
        styles: [{
            "featureType": "water",
            "stylers": [{
                "saturation": 43
            }, {
                "lightness": -11
            }, {
                "hue": "#0088ff"
            }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "hue": "#ff0000"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 99
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "lightness": 54
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ece2d9"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ccdca1"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#767676"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "oonff"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b8cb93"
                }]
            }, {
                "featureType": "poi.park",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.medical",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            }]

        };

      this.map = new google.maps.Map(mapElement, mapOptions);

      this.addMarkersToMap();
    }
  }

  // Add markers to the map
  addMarkersToMap() {
    this.clearMarkers(); // Clear existing markers
    this.infoWindow = new google.maps.InfoWindow(); // Initialize the InfoWindow

    this.markers.forEach(markerData => {
      const marker = new google.maps.Marker({
        position: { lat: Number(markerData.lat), lng: Number(markerData.lng) },
        map: this.map,
        title: markerData.name
      });

      // Store marker in currentMarkers array
      this.currentMarkers.push(marker);

      // Add click event listener to each marker
      marker.addListener('click', () => {
        this.showInfoWindow(markerData, marker.getPosition());
      });      
    });

    if ( this.currentMarkers.length > 0 ) {
      this.setBounds(); // Set the bounds after adding markers
    } else {
      this.map.setCenter(this.mapConfig.center);
      this.map.setZoom(this.mapConfig.zoom);
    }
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

  // Show the InfoWindow for the clicked marker
  private showInfoWindow(markerData: { name: string, lat: number, lng: number }, position: google.maps.LatLng | null) {
    if (position) {
      // Create a new div to hold the template content
      const contentDiv = document.createElement('div');

      // Create the view from the ng-template
      const templateRef = this.infoTemplate; // Reference the template passed from the parent
      const viewRef = this.viewContainerRef.createEmbeddedView(templateRef, { $implicit: markerData });

      // Append the template's DOM to the contentDiv
      contentDiv.appendChild(viewRef.rootNodes[0]);

      this.infoWindow.setContent(contentDiv); // Set the content of the infoWindow
      this.infoWindow.setPosition(position); // Set the position of the InfoWindow
      this.infoWindow.open(this.map); // Open the InfoWindow
    }
  }}
