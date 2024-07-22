import { Person } from "./person.model";
import { ScaleItem } from "./sector-type.model";

export class Allocation {
    constructor(
        public hkey: string,
        public sid: number,
        public incharge: number,
        public ranks: ScaleItem[],
        public persons: Person[]
    ) {
        ranks.sort((a, b)=>(a.s - b.s));
    }
}