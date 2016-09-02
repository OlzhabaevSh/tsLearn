import * as masterDetailSrv from "./masterDetailService";

import * as personService from "./../common/personService";

export let Name: string = "masterDetailController";

export interface IPerson {
    name: string;
    age: number;
    position: masterDetailSrv.Position;
    positionTitle: string;
}

export class MasterDetailController implements ng.IComponentController {

    // список персонов и выбранный элемент
    public persons: Array<IPerson>;
    public currentPerson: IPerson;

    // второй список
    public personsWeb: Array<personService.IPersonVM>;

    // паблик присваевает аргументы в поля
    constructor(public masterDetailService: masterDetailSrv.MasterDetailService, public personWebService: personService.PersonWebService) {
        this.persons = new Array();
   
    }

    // функция инит
    public init() {
        // получаем список персонов
        let persons = this.masterDetailService.GetPersons();

        let res = new Array<IPerson>();
        var s: ng.IHttpService;
        
        // обратите внимание, как работаем с циклом. аргументы типизированы
        persons.forEach((prs, i) => {
            res.push({
                name: prs.name,
                age: prs.age,
                position: prs.position,
                positionTitle: masterDetailSrv.Position[prs.position]
            });
        });

        persons.every((a, b, c) => { return true; });

        this.persons = res;

        // use second service
        this.personsWeb = this.personWebService.get(10);
    }

    public select(person: IPerson) {
        this.currentPerson = person;
    }


}

// экранируем зависимости
MasterDetailController.$inject = [masterDetailSrv.Name, personService.Name];
