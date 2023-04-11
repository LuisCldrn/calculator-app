export class Supply {
    constructor(
        
        public IRC: number,
        public NDC: string,
        public name: string,
        public admin: string[],
        public prescriber: string,
        public formula: number,
        public qty: number,
        public sig: string,
        public notes: string,
        public type: string,
    ) {
        
    }
}
