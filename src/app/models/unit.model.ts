import { ScaleItem } from "./sector-type.model";

export class Unit {
    constructor(
        public hkey: string,
        public id: number,
        public name: string,
        public recieved: boolean,
        public percent: number,
        public ishome: boolean,
        public ranks: ScaleItem[],
    ) {
        ranks.sort((a, b)=>(a.s - b.s));
    }
}