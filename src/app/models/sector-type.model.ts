export class ScaleItem {
    constructor (
        public r: string,
        public c: number,
        public a: number,
        public s: number
    ) {}
};

export class SectorType {
    //scale = {};
    constructor(
        public id: number,
        public name: string,
        public code: string,
        public ranks: ScaleItem[],
        public icon: string,
        public map_type: string,
        public deleted: number,
        public hkey: string
    ) {
        ranks.sort((a, b)=>(a.s - b.s));
    }
}