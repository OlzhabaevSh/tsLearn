export let Name: string = "masterDetailService";


export enum Position {
    junior, 
    senior,
    master
}

export interface IPerson {
    name: string;
    age: number;
    position: Position;
}

/**
 * Наш супер сервис
 */
export class MasterDetailService {

    private _persons: Array<IPerson>;

    /**
     * констркутор ничего не делает
     */
    constructor() {
    }

    /**
     * этого видно не будет снаружи
     */
    private generate(): void {

        let res = new Array<IPerson>();

        for (let i = 0; i < 10; i++) {
            res.push({
                name: "Person #" + i,
                age: 28,
                position: Position.junior
            });
        }

        this._persons = res;
    }

    /**
     * возвращаем массив персонов
     */
    public GetPersons(): Array<IPerson> {

        if (this._persons == null) {
            this.generate();
        }

        return this._persons;
    }

}