export class Point {
    constructor (
        public lat: number,
        public lng: number,
        public seq: number
    ) {}
};

export class MapData {
    //scale = {};
    constructor(
        public type: string,
        public points: Point[],
        public radius: number
    ) {
    }
}