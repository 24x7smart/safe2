export class Setting {
    constructor (
        public id: number,
        public n: string,
        public vs: string,
        public vi: number
    ) {

    }
}

export class bEvent {
    constructor(
        public hkey: string,
        public id: number,
        public name: string,
        public type: string,
        public descr: string,
        public start_date: Date,
        public end_date: Date,
        public report_time: Date,
        public legend: string,   
        public settings: Setting[],
        public deleted: number,
        public org_user: number,
        public org_unit: number,
        public sourcing: number,
        public status: string
    ) {
    }
}