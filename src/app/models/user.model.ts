export class Sourcer {
    constructor (
        public id: number,
        public name: string,
    ) {

    }
}

export class User {
    constructor(
        public hkey: string,
        public id: number,
        public name: string,
        public officer: string,
        public gender: string,
        public sourcing: Sourcer[],
    ) {
    }
}