import { MapData } from "./map-data.model";
import { ScaleItem } from "./sector-type.model";

export class Scheme {
    constructor (
        public event_id: number,
        public center: any,
        public zoom: number,
        public zones: Zone[],
        public hkey: string
    ){};
};

export class Zone {
    constructor (
        public zid: number,
        public zcode: string,
        public zname: string,
        public sectors: Sector[],
        public deleted: number,
        public show: boolean,
    ) {}
};

export class Sector {
    constructor(
        public id: number,
        public name: string,
        public code: string,
        public ranks: ScaleItem[],
        public type: number,
        public deleted: number,

        public onmap: MapData
    ) {
        ranks.sort((a, b)=>(a.s - b.s));
    }
}