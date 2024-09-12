import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'app/services/admin/settings.service';

declare const google: any;

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  showOverlay: boolean = false;
  srch_circle: any = null;
  searchBox: any = null;
settings: any = {};
  map: any;

  constructor(private settingService: SettingsService) { }

  async ngOnInit() {
    this.settings = await this.settingService.getSettingsByCode("monitor");

    this.ShowMap();
    this.ConfigSearchBox();
  }

  ShowMap() {
    var myLatlng = new google.maps.LatLng(this.settings?.center.lat, this.settings?.center.lng);
    var mapOptions = {
        zoom: this.settings?.zoom,
        center: myLatlng,
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
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  ConfigSearchBox() {
    // ADDING SEARCH BOX
    const input = document.getElementById("pac-input") as HTMLInputElement;
    this.searchBox = new google.maps.places.SearchBox(input);

    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    this.map.addListener("bounds_changed", () => {
        this.searchBox.setBounds(this.map.getBounds());
    });
    this.searchBox.addListener("places_changed", () => {
        const places = this.searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        if (this.srch_circle === null) {
            this.srch_circle = new google.maps.Circle({
                strokeColor: "#FFFF00",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FFFF00",
                fillOpacity: 0.35,
                map: this.map,
                center: places[0].geometry.location,
                radius: 100,
            });
            this.srch_circle.addListener("click", () => {
                this.srch_circle.setMap(null);
            });

        }
        else {
            this.srch_circle.setMap(this.map);
            this.srch_circle.setCenter(places[0].geometry.location);
        }

        this.map.setCenter(places[0].geometry.location);
    });
  }  
  actionClick(val: any) {

  }
}
