import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { Sector } from 'app/models/sectors.model';
import { MapSeciwComponent } from 'app/planning/scheme/scheme-map/map-seciw/map-seciw.component';

@Injectable({providedIn: 'root'})
export class InfoWindowService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  createInfoWindowContent(sector: Sector, OnAction: (action: string, id: number) => void): any {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MapSeciwComponent);
    const componentRef = componentFactory.create(this.injector);

    componentRef.instance.sector = sector;
    //componentRef.instance.onAction = OnAction;

    this.appRef.attachView(componentRef.hostView);
    return componentRef.location.nativeElement;
  }
}
