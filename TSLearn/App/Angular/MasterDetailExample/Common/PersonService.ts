export let Name: string = "personService";

export interface IPersonVM {
    id: number;
    name: string;
    age: number;
}

// second custom service

/**
 * Сервис типа web
 */
export class PersonWebService {

    /**
     * Скачиваем данные
     * @param count кол-во записей
     */
    public get(count: number): Array<IPersonVM> {
        var res = new Array<IPersonVM>();

        for (let i = 0; i < count; i++) {
            res.push({
                id: i,
                name: "Prs_Web_" + i,
                age: 28
            });
        }

        return res;
    }
}
