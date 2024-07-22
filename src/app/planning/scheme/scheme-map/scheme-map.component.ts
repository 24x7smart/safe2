import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Point } from 'app/models/map-data.model';
import { Scheme, Sector, Zone } from 'app/models/sectors.model';
import { InfoWindowService } from 'app/services/info-window.service';
import { SchemeService } from 'app/services/scheme.service';
import { SecTypeService } from 'app/services/sec-type.service';
import { SectorEditComponent } from './sector-edit/sector-edit.component';
import { ActionData, MapSeciwComponent } from './map-seciw/map-seciw.component';
import { SectorType } from 'app/models/sector-type.model';

declare const google: any;

export class MapMarker {
    constructor(
        public id: number,
        public marker: any,
        public iw: any,
        public type_: string,
        public sector: Sector
    ) { }
}

@Component({
    selector: 'app-maps',
    templateUrl: './scheme-map.component.html',
    styleUrls: ['./scheme-map.component.css']
})
export class SchemeMapComponent implements AfterViewInit {
    @ViewChild('infoWindowContainer', { read: ViewContainerRef }) infoWindowContainer: ViewContainerRef | undefined;

    constructor(private schemeService: SchemeService,
        private sectypeService: SecTypeService,
        private infowService: InfoWindowService,
        private dialog: MatDialog
    ) { }

    map: any = null;

    srch_circle: any = null;
    searchBox: any = null;
    secMarkers: MapMarker[] = [];
    showOverlay: boolean = false;

    scheme: Scheme;
    components: SectorType[];

    async ngOnInit() {
        this.components = await this.sectypeService.getComponents();
        this.schemeService.getScheme(1/*EVENT_ID*/).subscribe((scheme: Scheme) => {
            this.scheme = scheme;

            this.ShowMap();
            this.ConfigSearchBox();

            this.ShowScheme();
        });
    }

    ngAfterViewInit(): void {
        // Additional setup if needed after the view initializes
    }

    actionClick(event: string) {
        if (event === 'range') {
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < this.secMarkers.length; i++) {
                if (this.secMarkers[i].marker && this.secMarkers[i].marker.map != null) {
                    if (this.secMarkers[i].type_ === 'P' && this.secMarkers[i].marker.position) {
                        bounds.extend(this.secMarkers[i].marker.position);
                    }
                    else if (this.secMarkers[i].type_ === 'L') {
                        this.secMarkers[i].marker.getPath().forEach(latlng => {
                            bounds.extend(latlng);
                        });
                    }
                }
            }
            this.map.fitBounds(bounds);
        }
        else if (event === 'toggle') {
            this.showOverlay = !this.showOverlay;
        }
        else if (event === 'save') {
            this.schemeService.update(this.scheme.hkey, this.scheme).subscribe(() => {});
        }
        else if (event === 'set') {
            const center = this.map.getCenter();

            this.scheme.zoom = this.map?.getZoom();
            this.scheme.center.lat = center.lat();
            this.scheme.center.lng = center.lng();
        }
    }

    ShowMap() {
        var myLatlng = new google.maps.LatLng(this.scheme.center.lat, this.scheme.center.lng);
        var mapOptions = {
            zoom: this.scheme.zoom,
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

    ShowScheme() {
        this.scheme?.zones.forEach((zone: Zone) => {
            zone.sectors?.forEach((sector: Sector) => {
                if (sector.onmap.points?.length > 0) {
                    if (sector.onmap.type == 'P') {
                        this.ShowPointOnMap(sector);
                    }
                    else if (sector.onmap.type == 'L') {
                        this.ShowLineOnMap(sector);
                    }
                }
            })
        });
    }

    ShowPointOnMap(sector: Sector) {
        const secMarker = new MapMarker(sector.id, null, null, 'P', sector);
        var comp = this.sectypeService.getComponentById(this.components, sector.type);
        const image = "../../../../assets/img/maps/" + comp.icon + ".png"
        var latlng = new google.maps.LatLng(sector.onmap.points[0].lat, sector.onmap.points[0].lng);
        var marker = new google.maps.Marker({
            position: latlng,
            title: "Hello World!",
            draggable: true,
            icon: {
                url: image,
                scaledSize: new google.maps.Size(28, 28) // scaled size
            },
            sector: sector
        });
        marker.setMap(this.map);

        marker.addListener("dragend", (event) => {
            const position = marker.position;
            marker.sector.onmap.points[0].lat = position.lat();
            marker.sector.onmap.points[0].lng = position.lng();
        });

        // TODO - When is this Map going empty
        //this.sectorMarkers.set(sector.id, marker);
        secMarker.marker = marker;

        const infowindow = new google.maps.InfoWindow({
            content: sector.name,
            ariaLabel: "Safe 24x7",
        });
        //this.sectorIWs.set(sector.id, infowindow);
        secMarker.iw = infowindow;

        marker.addListener("click", () => {
            infowindow.setContent(this.openInfoWindow(marker, sector));
            infowindow.open(this.map, marker);
        });

        secMarker.type_ = 'P';
        this.secMarkers.push(secMarker);
    }

    ShowLineOnMap(sector: Sector) {

        const secMarker = new MapMarker(sector.id, null, null, 'L', sector);

        sector.onmap.points.sort((a, b) => (a.seq - b.seq));
        const pline = new google.maps.Polyline({
            path: sector.onmap.points,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 5,
            editable: true,
            sector: sector
        });
        pline.setMap(this.map);

        secMarker.marker = pline;

        google.maps.event.addListener(pline.getPath(), "insert_at", () => {
            this.SetPath(sector, pline.getPath());
        });
        google.maps.event.addListener(pline.getPath(), "remove_at", () => {
            this.SetPath(sector, pline.getPath());
        });
        google.maps.event.addListener(pline.getPath(), "set_at", () => {
            this.SetPath(sector, pline.getPath());
        });


        const infowindow = new google.maps.InfoWindow({
            content: sector.name,
            ariaLabel: "Safe 24x7",
        });
        secMarker.iw = infowindow;

        pline.addListener("click", (event) => {
            infowindow.setContent(this.openInfoWindow(pline, sector));
            infowindow.setPosition(event.latLng);
            infowindow.open(this.map);
        });

        secMarker.type_ = 'L';
        this.secMarkers.push(secMarker);

    }

    openInfoWindow(marker, sector: Sector) {
        if (this.infoWindowContainer) {
            this.infoWindowContainer.clear();

            // Create the component
            const componentRef = this.infoWindowContainer.createComponent(MapSeciwComponent);
            // Pass data to the component
            componentRef.instance.sector = sector;
            componentRef.instance.component = this.sectypeService.getComponentById(this.components, sector.type);

            // Subscribe to the buttonClicked event
            componentRef.instance.buttonClicked.subscribe((data: ActionData) => {
                this.OnInfoWindowAction(marker, data.action, data.id);
            });
            return componentRef.location.nativeElement;
        }
    }

    SetPath(sector: Sector, path) {
        let points: Point[] = [];
        path.forEach((latLng, index) => {
            var lat = latLng.lat();
            var lng = latLng.lng();
            points.push(new Point(lat, lng, index));
        });

        sector.onmap.points = points;
        console.log(this.scheme);
    }

    OnInfoWindowAction(marker: any, action: string, sector_id: number) {
        const sector: Sector = this.schemeService.getSectorById(this.scheme, sector_id);
        if (sector != null) {
            if (action === 'remove' || action === 'delete') {
                sector.onmap.points = [];
                sector.onmap.radius = 0;
                sector.onmap.type = '';

                marker.setMap(null);
                for (var i = 0; i < this.secMarkers.length; i++) {
                    if (this.secMarkers[i].id === sector_id) {
                        this.secMarkers.splice(i, 1);
                        break;
                    }
                }
            }
            if (action === 'delete') {
                this.schemeService.deleteSectorById(this.scheme, sector_id);
            }
        }
    }

    AddIconDrag(e: any) {
        //console.log(e);
        e.preventDefault();
    }

    AddIconDrop(e) {
        const data: string = e.dataTransfer.getData('text/plain');
        const sdata: string[] = data.split(',');

        const type = sdata[0];
        const id = Number(sdata[1]);
        const zid = Number(sdata[2]);

        var point = new google.maps.Point(e.layerX, e.layerY);
        var latlng = this.point2LatLng(point, this.map);

        var sector: Sector = null;

        if (type === 'A') {
            var lsec = {
                id: 0,
                zid: zid,
                tid: id,
                zone: '',
                type: this.sectypeService.getComponentById(this.components, id).name,
                code: '',
                name: ''
            };
            const dialogRef = this.dialog.open(SectorEditComponent, {
                width: '600px', // Adjust width as necessary
                data: { sector: lsec, scheme: this.scheme }
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    // Update 'sector' object with edited values if 'result' is true
                    sector = result;
                    this.setSectorOnMap(sector, latlng);
                }
            });
        } else if (type === 'P') {
            sector = this.schemeService.getSectorById(this.scheme, id);
            this.setSectorOnMap(sector, latlng);
        }
    }

    setSectorOnMap(sector: Sector, latlng: any) {
        const comp = this.sectypeService.getComponentById(this.components, sector.type);
        if (comp.map_type === 'P') {
            sector.onmap.type = comp.map_type;
            sector.onmap.points = [];
            sector.onmap.points.push(new Point(latlng.lat(), latlng.lng(), 1));
            this.ShowPointOnMap(sector);
        }
        else if (comp.map_type === 'L') {
            sector.onmap.type = comp.map_type;
            sector.onmap.points = [];
            sector.onmap.points.push(new Point(latlng.lat(), latlng.lng(), 1));
            sector.onmap.points.push(new Point(latlng.lat() + 0.001, latlng.lng(), 2));
            this.ShowLineOnMap(sector);
        }
    }
    point2LatLng(point, map) {
        var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
        var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
        var scale = Math.pow(2, map.getZoom());
        var worldPoint = new google.maps.Point(point.x / scale + bottomLeft.x, point.y / scale + topRight.y);
        return map.getProjection().fromPointToLatLng(worldPoint);
    }

}
